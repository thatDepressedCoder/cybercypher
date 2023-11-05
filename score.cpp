#include <json/value.h>
#include <fstream>

void getQuestion(Json::Value questions, int questionNum) {
	int idx = 0;
	while (questions["riddle"]) {
		
	}
}

std::ifstream jsonData("riddles.json", std::ifstream::binary);
Json::Value questions;
jsonData >> questions;
