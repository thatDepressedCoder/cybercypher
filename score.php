<?php
	$playerScore = 0;
	$questions = array("John", "Mary", "Peter", "Sally");
	$points = array("John", "Mary", "Peter", "Sally");

	$questionJSON = json_encode($questions);
	$pointsJSON = json_encode($points);

	function getQuestion($questionNum) {
		return $questions[$questionNum];
	}

	function addPoints($playerScore, $questionNum) {
		return $playerScore + $points[$questionNum];
	}

	$path = 'riddles.json';
	$jsonString = file_get_contents($path);
	$jsonData = json_decode($jsonString, true);
	var_dump($jsonData);

?>