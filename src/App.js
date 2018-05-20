import React, { Component } from 'react';
import './app.css';
import Jurors from './Jurors'
import Questioning from './Questioning'
import Blackmail from './Blackmail'

class App extends Component {
  constructor(props) {
    super(props)
    const jurors = [
      {
        "name": "Squilliam Fancyson", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I live for a living. I retired several years ago and spend my time hiking, surfing, helping the homeless, pet styling on the side."},
          {"number": 2, "text": "I started as a computer science major, but ended up graduating with a BA in Business and Marketing."},
          {"number": 3, "text": "Single for now. Just me and Rufus - man’s best friend."},
          {"number": 4, "text": ""}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Disappeared with investor cash after starting a failed blockchain-based pet grooming business."},
          {"number": 2, "text": "Bought over 100 extreme experimental massages for his dog with stolen credit cards."}
        ]
      },
      {
        "name": "A Big Van", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I work part time in food services, specifically Japanese culinary arts."},
          {"number": 2, "text": "I've got some debt from my DVD and action figure collections, but nothing too serious. Living in my parent’s basement is a choice. I don’t get along with roommates."},
          {"number": 3, "text": "I majored in Japanese but ended up dropping out after 2 years. Western institutions tend to have very unenlightened views on learning styles."},
          {"number": 4, "text": "It's...complicated. Ever notice how bigoted people can be? Like “2d dimensional” is a slur for superficial people? I can say for sure the only superficial people I’ve ever met were all very much in the third dimension."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Filed his “Magical Girl Aoi” body pillow as a wife and legal dependent on his taxes."},
          {"number": 2, "text": "Killed their mother by incorrectly preparing fugu fish."}
        ]
      },
      {
        "name": "Paulina Smith", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I run a small business helping people get off the grid and escape the deep state. Nature is our greatest boon, and with a little effort, you can easily disappear into her comforting bossom."},
          {"number": 2, "text": "I received a degree in tax law from a PRIVATE university based out of the Cayman Islands."},
          {"number": 3, "text": "I don't deal in credit. That’s the problem with you normies, chained to the system. I own my property free and clear. I pay my keep in gold bullion and bartering in favors."},
          {"number": 4, "text": "I'm married and my wife runs a very successful youtube channel for survivalist cooking and and DIY woodworking. No government handouts for us."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "You have pictures of them doing an erotic photoshoot with the US constitution."},
          {"number": 2, "text": "Widdles artisanal bon bon spoons from Federally protected trees."}
        ]
      },
      {"name": "Mario Mario", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I'm an entrepreneur. I run my own small business. I sell authentic antique fabrics from a variety sources for a very discerning clientele."},
          {"number": 2, "text": "I didn't go to college. I participated in an apprentice apprenticeship."},
          {"number": 3, "text": "My business is very much dependent on Cost of Goods, as most of my net worth is tied up with my inventory.  I’d say I’m currently stable and profitable."},
          {"number": 4, "text": "I'm currently single, but hopeful. I know I won’t die and crazy cat lady."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Once killed someone allergic to cats by knitting them a sweater made with cat-hair."},
          {"number": 2, "text": "Literally, steals clothes off the backs of senile elderly."}
        ]
      },
      {
        "name": "Ezekial Ol' Corncob Calhoun", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I'm a famous YouTuber and influencer - right now I’m trying to develop a career in Hollywood baby."},
          {"number": 2, "text": "I've had a million subscribers since I was 15, so I never considered going to college. My fans are super talented and help me with so much. If you know where to look - then you can learn how to do anything on the internet."},
          {"number": 3, "text": "Hell no! I make bank off of my youtube subscribers, twitch streams, and promotion deals."},
          {"number": 4, "text": "I'm in a committed relationship with all of my wonderful subscribers."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Spends eight hours a day reporting DMCA violations on elementary schoolers blogs."},
          {"number": 2, "text": "Writes and sells social media botnets - uses them to perform DDOS attacks."}
        ]
      },
      {
        "name": "Atreyu Moonchild", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I'm a traveling salesman, so I'm on the road a lot. But it’s all worth it to convert a new customer and see how their lives change. You can meet some really interesting people too."},
          {"number": 2, "text": "I have 20 years of experience in the field, selling all kinds of products to all kinds of people."},
          {"number": 3, "text": "I'm still paying off my beautiful honeymoon to Hawaii."},
          {"number": 4, "text": "I've been happily married for 17 years."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Is legally married at least twice under different names."},
          {"number": 2, "text": "Sells visas by marrying anyone who wants to come to America."}
        ]
      },
      {"name": "Mr. Jazz Hands", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I play first chair in the Chicago Philharmonic. I’m a violin soloist and I even have an album out of my original compositions."},
          {"number": 2, "text": "I went to a first rate conservatory, and then studied under excellent masters while playing."},
          {"number": 3, "text": "Let’s just say the fine arts aren’t appreciated as they used to be.  I know I’ll do WHATEVER it takes and invest everything to ensure quality and elegance but the common masses just don’t seem to care. So you can draw your own conclusions."},
          {"number": 4, "text": "Oh, I used to be very in love with one of my old tutors, a wise and talented musician with years of experience. He’s gone now though - and I’ve sworn to myself that I shall never love again."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "The secret to their success is that they kill cats and harvest their intestines."},
          {"number": 2, "text": "Murdered the person who had their current job so that the old git would just die already and they could finally get promoted."}
        ]
      },
      {"name": "Strange Inspecific Person", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I give people confidence to face the world. I revitalize relationships and careers. There’s no one I can’t help."},
          {"number": 2, "text": "I have extensive qualifications from respected institutions of higher learning."},
          {"number": 3, "text": "I did once, but extensive college debt is very common in my field."},
          {"number": 4, "text": "Several failed marriages, but I meet many wonderful people in my line or work."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Uses cheap yak hair in patients’ plugs."},
          {"number": 2, "text": "Paid themselves from burn victim charity funds to perform breast implants."}
        ]
      },
      {
        "name": "Sherman Phelps", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I own and run a funeral home. I also own a series of assisted living facilities."},
          {"number": 2, "text": "I have a bachelors in mortuary science. I apprenticed for several years at a respected funeral home."},
          {"number": 3, "text": "Nope. Business is booming. Especially since more clients are choosing cremations, which I do on site. No burial arrangements required."},
          {"number": 4, "text": "A beautiful partner, three lively teenagers. Almost too lively."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Their children took a variety of offensive photos with 'clients.'"},
          {"number": 2, "text": "A tad thrifty with the furnace bill, some family members of clients would be not be pleased with the results."}
        ]
      },
      {
        "name": "Hammer Tim", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I work at the aquarium. I love animals, especially sea life."},
          {"number": 2, "text": "I train every day? Like, the stairmaster? Oh… I went to school in the state, you know, the one that hangs down, like a... you know."},
          {"number": 3, "text": "I travel a lot I suppose. I love to try every local delicacy."},
          {"number": 4, "text": "I like to keep things classy but casual, like a pair of 120 dollar designer sweatpants."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Ate dolphin meat in St. Vincent. Keeping it from their boss."},
          {"number": 2, "text": "Personally clubbed a baby seal cub and turned it into a fur hat."}
        ]
      },
      {
        "name": "Krang", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I serve the faithful of my community as both a sympathetic listener and moral guide. I try not to think of myself as above any of my parishioners, I’m just another schmoe working the frialator like anyone else. We all work for the big guy, Ronald McDonald. I mean God, sorry."},
          {"number": 2, "text": "Seminary school, many long walks, contemplating the majesty of the Lord and his creation."},
          {"number": 3, "text": "Only a debt to God for saving my soul."},
          {"number": 4, "text": "I consider my marriage my highest calling, though I am a shepherd to the the sheeple of my community. Those duties can be very consuming. Very late nights."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Having an affair with another respected member of the community."},
          {"number": 2, "text": "Embezzled money from a missionary fund."}
        ]
      },
      {
        "name": "Popular Music", "answeredQuestions": [],
        "answers": [
          {"number": 1, "text": "I unravel the secrets of the human body. With my work, humanity will be free of the spectre’s that tortured our ancestors."},
          {"number": 2, "text": "I decided to abandon my post-doc to avoid the quagmire of the academic machine."},
          {"number": 3, "text": "I don’t even want to think about it."},
          {"number": 4, "text": "I don’t have time for such things. There’s nothing I won’t sacrifice for science."}
        ],
        "blackmailOptions": [
          {"number": 1, "text": "Bought several organs off the black market to cut costs."},
          {"number": 2, "text": "Left academia after embarrassing breach of procedure in several studies."}
        ]
      }
    ]

    let blackmails = this.selectBlackmail(jurors.slice(), 3);
    this.state = {
      blackmailed: [],
      blackmailsLeft: 3,
      blackmails: [],
      questionsLeft: 20,
      currentlyQuestioning: null,
      jurors: jurors,
      blackmails: blackmails
    };
  }

  selectBlackmail = (jurors, blackmailCount) => {
    let blackmails = [];
    for (let i=0; i < blackmailCount; i++) {
      let jurorIndex = Math.floor(Math.random() * jurors.length)
      let juror = jurors.splice(jurorIndex, 1)[0];
      let blackmailOptionIndex = Math.floor(Math.random() * juror.blackmailOptions.length)
      let blackmailOption = juror.blackmailOptions[blackmailOptionIndex]
      blackmailOption["jurorName"] = juror.name
      blackmails.push(juror.blackmailOptions[blackmailOptionIndex])
    }
    return blackmails;
  }

  wasBlackmailedCallback = juror => {
    let blackmailed = [...this.state.blackmailed, juror]
    this.setState({ blackmailed: blackmailed})
    if (blackmailed.length === 3) {
      let blackmails = this.state.blackmails
      let a = this.state.blackmails.map((bm) => {return bm.jurorName}).sort()
      let b = blackmailed.map((bm) => {return bm.name}).sort()
      if (JSON.stringify(a) === JSON.stringify(b)) {
        alert("Not Guilty! You should probably be ashamed of yourself, but you earned a sweet pay day.")
      } else {
        alert("Guilty! Not only is your client getting locked up, you're gunna have to find a defense attorney yourself for those blackmail charges.")
      }
    }
  }

  questioningCallback = (juror) => {
    this.setState({ currentlyQuestioningName: juror.name })
  }

  answerQuestionCallback = (question, juror) => {
    if (this.state.questionsLeft > 0) {
      let newJurors = this.state.jurors.map(j => {
        if (juror.name === j.name) {
          return {...j, answeredQuestions: [...j.answeredQuestions, question.number]}
        } else {
          return j
        }
      })
      this.setState({ jurors: newJurors, questionsLeft: this.state.questionsLeft - 1})
    } else {
      alert("You are out of questions!")
    }
  }

  currentlyQuestioningJuror = ()=> {
    if (this.state.currentlyQuestioningName) {
      return this.state.jurors.filter(juror => {
        return juror.name === this.state.currentlyQuestioningName
      })[0]
    }
  }

  render() {
    return (
      <div className="app">
        <p>
          Well, it's hopeless. Your client is definitely going to be found guilty. However, as a great defense attorney, you've never let a little thing like evidence get in your way.
          Lucky for you, your client isn't the only scumbag in the courtroom. You've gotten the dirt on several jurors and you're going to blackmail your way into a "not guilty" verdict.
          Unfortunately for you, you don't know which juror each incriminating fact belongs to.
        </p>
        <p>
          You can read the intel you've gathered and then question each juror to figure out whose dirty deeds you can use to your client's advantage. Once you think you know who to blackmail, start throwing out accusations. Now get in there and rig that jury!
        </p>
        <Jurors
        wasBlackmailedCallback={this.wasBlackmailedCallback}
        questioningCallback={this.questioningCallback}
        currentlyQuestioning={this.state.currentlyQuestioning}
        blackmailed={this.state.blackmailed}
        blackmailsLeft={this.state.blackmailsLeft}
        jurors={this.state.jurors}
        />

        <div className="bottom">

          <div className="gameState">
            <div>Number of questions left: {this.state.questionsLeft}</div>

            {this.state.questionsLeft <= 0 && (
              <div>YOU ARE OUT OF QUESTIONS. PLEASE PICK WHO TO BLACKMAIL</div>
            )}

            <Blackmail
            blackmailing={this.state.blackmailed}
            />
          </div>

          <div className="jurorCard">
            {this.state.currentlyQuestioningName && (
              <Questioning juror={this.currentlyQuestioningJuror()} answerQuestionCallback={this.answerQuestionCallback} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
