export function countCorrectAnswers(questions) {
	return questions.reduce((prev, cur) => {
		if (cur.score > 0) {
			return prev + 1;
		}
		return prev;
	}, 0);
}
