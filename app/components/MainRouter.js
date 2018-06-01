import React, { Component } from 'react';
import ArticlesCat from './articles/ArticlesCat';
import Articles from './articles/Articles';
import ArticlesRead from './articles/ArticlesRead';
import KnowType from './knowledge/KnowType';
import ScratchList from './knowledge/scratch/ScratchList';
import LetterList from './knowledge/letters/LetterList';
import LettersTabs from './knowledge/letters/LettersTabs';
import ScratchTabs from './knowledge/scratch/ScratchTabs';
import Exercise from './exercise/Exercise';
import Exercises from './exercise/Exercises';
import DoExercise from './exercise/DoExercise';
import StartExam from './exam/StartExam';
import EndExam from './exam/EndExam';
import DoExam from './exam/DoExam';
import Main from './Main';

import answer1 from './exercise/anhan/answer1';
import answer2 from './exercise/anhan/answer2';
import answer3 from './exercise/anhan/answer3';
import answer4 from './exercise/anhan/answer4';
import answer5 from './exercise/anhan/answer5';
import answer6 from './exercise/anhan/answer6';
import answer7 from './exercise/anhan/answer7';
import answer8 from './exercise/anhan/answer8';
import answer9 from './exercise/anhan/answer9';
import answer10 from './exercise/anhan/answer10';

import { Scene, Router } from 'react-native-router-flux';

class MainRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Main" component={Main} initial hideNavBar />
          <Scene key="KnowType" component={KnowType} hideNavBar />
          <Scene key="ArticlesCat" component={ArticlesCat} hideNavBar />
          <Scene key="ScratchList" component={ScratchList} hideNavBar />
          <Scene key="LetterList" component={LetterList} hideNavBar />
          <Scene key="Articles" component={Articles} hideNavBar />
          <Scene key="ArticlesRead" component={ArticlesRead} hideNavBar />
          <Scene key="LettersTabs" component={LettersTabs} hideNavBar />
          <Scene key="ScratchTabs" component={ScratchTabs} hideNavBar />
          <Scene key="Exercise" component={Exercise} hideNavBar />
          <Scene key="Exercises" component={Exercises} hideNavBar />
          <Scene key="DoExercise" component={DoExercise} hideNavBar />
          <Scene key="StartExam" component={StartExam} hideNavBar />
          <Scene key="DoExam" component={DoExam} hideNavBar />
          <Scene key="EndExam" component={EndExam} hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default MainRouter;
