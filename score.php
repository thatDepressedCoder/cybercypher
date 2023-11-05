<?php
	$playerScore = 0;

	$path = 'riddles.json';
	$jsonString = file_get_contents($path);
	$jsonData = json_decode($jsonString, true);
	var_dump($jsonData);

	function getQuestion($questionNum) {
		$idx = 0;
		while ($jsonData->questionNum == $questionNum) {
			
		}
	}

	function addPoints($playerScore, $questionNum) {
		return $playerScore + $points[$questionNum];
	}


?>