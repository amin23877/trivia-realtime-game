import React, { useRef } from "react";
import { useWhenClickOutside } from "common/hooks/useWhenClickOutside";

import s from "./Popover.module.scss";
import Text from "common/components/UI/text/Text";

const Popover = ({ ns, open, openFrom = "top", onClose: close }) => {
	const ref = useRef();

	useWhenClickOutside([ref], () => {
		close();
	});

	return (
		open && (
			<div ref={ref} className={`${s.container} ${s["open-from-" + openFrom]}`}>
				<Text ns={ns} />
			</div>
		)
	);
};

export default Popover;
