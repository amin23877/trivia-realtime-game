import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import './CategoriesList.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from "react-router-dom";
import { GET_CATEGORIES_LIST } from 'redux/actions/mainActions/generalActions';
import CategoryItem from "./categoryItem/CategoryItem";
import SearchForPlayer from "../searchForPlayer/SearchForPlayer";
import { SOCKET_BASE_URL } from "common/values/CORE";
import { io } from "socket.io-client";
import WaitForStart from "../waitForStart/WaitForStart";
import ShowQuestion from "../showQuestion/ShowQuestion";

const CategoriesList = () => {
    const Dispatch = useDispatch()
    const navigate = useNavigate();

    const categories = useSelector((state) => state.stateGeneral.categoriesList);
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState()
    const [showCategories, setShowCategories] = useState(true)
    const [doubleGameReady, setDoubleGameReady] = useState()
    const [doubleGameQuestion, setDoubleGameQuestion] = useState()
    const [socket, setSocket] = useState()
    const [socketId, setSocketId] = useState()
    const socketUrl = SOCKET_BASE_URL;
    const token = localStorage.getItem('token')
        ? `${localStorage.getItem('token')}`
        : null;


    useEffect(() => {
        const socketp = io(socketUrl, { transports: ["websocket"] });
        setSocket(socketp);
        socketp.on("connect", () => {
            console.log("connected");
            socketp.emit("auth", { token });
        });

        socketp.on('authentication', (e) => {
            console.log('authentication' , e)
            setSocketId(e.socketid)
        })
    }, [])
    useEffect(() => {
        if (categories) {
            setLoading(false)
        } else {
            Dispatch(GET_CATEGORIES_LIST())
            setLoading(true)
        }
    }, [categories])

    useEffect(() => {
        if (selectedCategory) {
            
            socket.emit("doubleGame", { CategoryId: selectedCategory._id });
            socket.on("doubleGame", (e) => {
                console.log("doubleGame", e);
            });
            socket.on("doubleGameReady", (e) => {
                setDoubleGameReady(e);
                setSelectedCategory(null);
                setShowCategories(false);
                console.log("doubleGameReady", e);
                localStorage.setItem('quickPlay-token', e.token)
            });
            socket.on("doubleGameQuestion", (e) => {
                setDoubleGameReady(null);
                setSelectedCategory(null);
                setDoubleGameQuestion(e);
                console.log("doubleGameQuestion", e);
            });
        }
    }, [selectedCategory])
    console.log('selectedCategory', selectedCategory)
    console.log('socket', socket)

    const handleGotoBack = () => {
        navigate('/')
    }

    const handleSelectCategory = (category) => {
        setSelectedCategory(category)
    }
    const handleCloseSearch = () => {
        setSelectedCategory(null)
    }
    const handleSelectOption = (opt) => {
        console.log('opt', socket)
        // socket.connect();
        socket.emit("doubleGameAnswer", { gameToken: localStorage.getItem('quickPlay-token'), answer: opt });
    }

    return (
        <>
            {
                showCategories && <div className="categories-list w-100 h-100">
                    <div className="categories-list__header">
                        <p className="categories-list__header--title">
                            Select the category you want
                        </p>
                        <ArrowBackIcon onClick={handleGotoBack} className="categories-list__header--back-icon" />
                    </div>
                    <div className="categories-list__category-item-container">
                        {
                            categories && categories.map((category, index) => (
                                <CategoryItem handleSelectCategory={handleSelectCategory} index={index} data={category} key={category._id} />
                            ))
                        }
                    </div>

                </div>
            }
            {
                selectedCategory &&
                <SearchForPlayer handleClose={handleCloseSearch} selectedCategory={selectedCategory} />
            }

            {doubleGameReady &&
                <WaitForStart socket={socket} doubleGameReady={doubleGameReady} />
            }
            {doubleGameQuestion &&
                <ShowQuestion
                    socket={socket}
                    doubleGameQuestion={doubleGameQuestion}
                    handleSelectOption={handleSelectOption}
                />
            }

        </>
    )
}

export default CategoriesList