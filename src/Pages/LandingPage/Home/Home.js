import React, { Component } from "react"
import { Fade } from "react-reveal"
import HeaderHero from "../../../Components/Organisms/HeaderHero"
import ItemSession from "../../../Assets/images/icons/street-view-500.png"
import ItemNetworking from "../../../Assets/images/icons/workspace-500.png"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakers: [
        {
          name: "Galuh Sahid",
          role: "Data Scientist",
          institution: "Gojek",
          description: "GDE Machine Learning",
          photo: "./assets/images/speakers/galuh-sahid.jpg",
          talk_title: "A Whirlwind Tour of Machine Learning with TensorFlow",
          social_media: {
            twitter: "https://twitter.com/galuhsahid"
          }
        },
        {
          name: "Deany Jaghdour",
          role: "VP Strategy",
          institution: "Pintek",
          description: null,
          photo: "./assets/images/speakers/deany.jpg",
          talk_title: "The Truth: Self-Confidence Isn't Only About You",
          social_media: {
            facebook: "https://www.facebook.com/deany.jaghdour",
            instagram: "https://www.instagram.com/dassoem/",
            linkedin: "https://www.linkedin.com/in/deanyjaghdour/"
          }
        },
        {
          name: "Andrew Darmadi",
          role: "Founder & CEO",
          institution: "Halosis",
          description: null,
          photo: "./assets/images/speakers/andrew.jpg",
          talk_title: "Women Empowerment Through Technology",
          social_media: null
        },
        {
          name: "Florentin Purnama",
          role: "Data Scientist",
          institution: "OVO",
          description: null,
          photo: "./assets/images/speakers/florentin.png",
          talk_title: "Automate Boring Stuff Data Science Way",
          social_media: {
            linkedin: "https://www.linkedin.com/in/florentin-anggraini-purnama-229375110",
            github: "https://github.com/florentin-a-p",
            twitter: "https://twitter.com/flo_and_behold"
          }
        },
        {
          name: "Fatia Kusuma Dewi",
          role: "Data Scientist",
          institution: "Bukalapak",
          description: null,
          photo: "./assets/images/speakers/fatia.jpg",
          talk_title: "Data as a Consultant: Turning Insights into Actions",
          social_media: {
            linkedin: "https://www.linkedin.com/in/fatiakd/",
          }
        },
        {
          name: "Vina Zerlina",
          role: "Product Design Manager",
          institution: "STOQO",
          description: null,
          photo: "./assets/images/speakers/vina-zerlina.jpg",
          talk_title: "Design Leadership in Startups",
          social_media: null
        },
        {
          name: "Anbita Nadine Siregar",
          role: "Founder",
          institution: "Generation Girl",
          description: null,
          photo: "./assets/images/speakers/anbita-nadine.jpg",
          talk_title: "",
          social_media: null
        },
        {
          name: "Tania Soerianto",
          role: "CPO",
          institution: "Generation Girl",
          description: null,
          photo: "./assets/images/speakers/tania.jpg",
          talk_title: "",
          social_media: null
        },
        {
          name: "Aulia Halimatussadiah",
          role: "Co-Founder & CMO",
          institution: "Storial.co",
          description: null,
          photo: "./assets/images/speakers/aulia.jpg",
          talk_title: "Using Google Trends to Build Your Content Marketing Strategy",
          social_media: {
            instagram: "https://www.instagram.com/salsabeela/",
          }
        },
        {
          name: "Lady Noor Chita",
          role: "Co-Founder & CEO",
          institution: "ibunda.id",
          description: null,
          photo: "./assets/images/speakers/lady-noor.JPG",
          talk_title: "Still in discussion. But this could be the draft \"Women's Mental Health\".",
          social_media: null
        },
        {
          name: "Fransiska Hadiwidjana",
          role: "Head of Engineering",
          institution: "Mamikos",
          description: "Founder of Prelo Indonesia",
          photo: "./assets/images/speakers/fransiska.jpeg",
          talk_title: "",
          social_media: null
        },
      ],
      teams: [
        {
          name: "Hasna Khairunnisa",
          photo: "./assets/images/teams/Hasna.jpg",
          institution: "WTM Ambassador Jakarta",
          description: "Sponsorship Team (Lead)",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Viranita Julianti",
          photo: "./assets/images/teams/vira.png",
          institution: "WTM Ambassador Depok",
          description: "Program Team (Lead)",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Ivana Irene T",
          photo: "./assets/images/teams/Irene.JPG",
          institution: "WTM Scholar",
          description: "Speakers Team (Lead)",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Victoria H. Edon",
          photo: "./assets/images/teams/victoria_edon.JPG",
          institution: "Flutter Tangerang",
          description: "Speakers Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "R. Surahutomo A.P",
          photo: "./assets/images/teams/dana.jpg",
          institution: "GDG Jakarta",
          description: "Developer Team (Lead)",
          social_media: {
            instagram: "https://www.instagram.com/retzd.dev",
            linkedin: "https://www.linkedin.com/in/r-surahutomo-aziz-pradana-27760112a/"
          }
        },
        {
          name: "Ahmed Rayhan P",
          photo: "./assets/images/teams/arayhan.jpg",
          institution: "GDG Depok",
          description: "Developer Team",
          social_media: {
            instagram: "https://www.instagram.com/arayhan_/",
            linkedin: "https://www.linkedin.com/in/arayhan/"
          }
        },
        {
          name: "Tangguh D Pramono",
          photo: "./assets/images/teams/Tangguh.jpg",
          institution: "GDG Depok",
          description: "Sponsorship Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Azmi Faiz Habibi",
          photo: "./assets/images/teams/faiz.jpg",
          institution: "GDG Depok",
          description: "Sponsorship Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Qassandra Chaidir",
          photo: "./assets/images/teams/qassie.jpeg",
          institution: "GDG Depok",
          description: "Program Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Vio Ayu Oktavia",
          photo: "./assets/images/teams/vio_ayu_oktavia.JPG",
          institution: "Flutter Tangerang",
          description: "Speakers Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Winda Dyah Ayu",
          photo: "./assets/images/teams/winda.JPG",
          institution: "GDG Depok",
          description: "Finance Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Muhamad Ridho F",
          photo: "./assets/images/teams/ridho.jpg",
          institution: "GDG Depok",
          description: "Production Team (Lead)",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Pramasta Ramadha R",
          photo: "./assets/images/teams/pramasta.jpg",
          institution: "GDG Depok",
          description: "Creative Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Ari Setiaji",
          photo: "./assets/images/teams/ari-setiaji.jpg",
          institution: "GDG Jakarta",
          description: "Speakers Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Qodir Masruri",
          photo: "./assets/images/teams/masQOD.jpg",
          institution: "GDG Jakarta",
          description: "Production Team",
          social_media: {
            instagram: "http://instagram.com/justmasqod",
            linkedin: "https://id.linkedin.com/in/justmasqod"
          }
        },
        {
          name: "Raihan Wisesa W",
          photo: "./assets/images/teams/raihan-wisesa-w.jpg",
          institution: "GDG Depok",
          description: "Program Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Anggi Maisa H",
          photo: "./assets/images/teams/Anggi.JPG",
          institution: "GDG Jakarta",
          description: "Speakers Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Erwita Pamelia D",
          photo: "./assets/images/teams/erwita.jpg",
          institution: "GDG Depok",
          description: "F&B Team (Lead)",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Novia Rahmat",
          photo: "./assets/images/teams/novia.jpg",
          institution: "GDG Depok",
          description: "F&B Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Farid Al Farras",
          photo: "./assets/images/teams/farid.jpg",
          institution: "GDG Depok",
          description: "Media Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Suratno",
          photo: "./assets/images/teams/suratno.jpeg",
          institution: "DSC PENS",
          description: "Developer Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Yusril Chalif A",
          photo: "./assets/images/teams/yusril.jpeg",
          institution: "DSC PENS",
          description: "Developer Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
        {
          name: "Ridwan Prayoga",
          photo: "./assets/images/teams/ridwan.jpeg",
          institution: "GDG Depok",
          description: "F&B Team",
          social_media: {
            instagram: "#",
            linkedin: "#"
          }
        },
      ],
      sponsors: [
        {
          category: "community",
          title: "Community Partnership",
          institutions: [
            {
              logo: "./assets/images/partnership/dilo-jakarta.png",
              website: "https://www.instagram.com/dilojakarta/",
              alt: "Dilo Jakarta"
            },
            {
              logo: "./assets/images/partnership/female-geek.png",
              website: "https://www.instagram.com/femalegeek_org/",
              alt: "Female Geek"
            },
            {
              logo: "./assets/images/partnership/femme-in-stem.png",
              website: "https://www.instagram.com/femmeinstem/",
              alt: "Femme in Stem"
            },
            {
              logo: "./assets/images/partnership/gengirl.png",
              website: "https://www.instagram.com/generationgirl.id/",
              alt: "Generation Girl"
            },
            {
              logo: "./assets/images/partnership/gitech.png",
              website: "https://www.instagram.com/girlsintechid/",
              alt: "Girls in Tech Indonesia"
            },
            {
              logo: "./assets/images/partnership/kcmi.png",
              website: "https://www.instagram.com/kcmi_id/",
              alt: "Komunitas Coding Mum Indonesia"
            },
            {
              logo: "./assets/images/partnership/female-in-action.png",
              website: "https://www.instagram.com/femaleinaction.id/",
              alt: "Female in Action"
            },
            {
              logo: "./assets/images/partnership/perempuanwp.jpeg",
              website: "http://wp-id.org",
              alt: "Perempuan Wordpress Indonesia"
            },
            {
              logo: "./assets/images/partnership/cewekbanget.png",
              website: "http://cewekbanget.id",
              alt: "Cewek Banget Besties"
            },
            {
              logo: "./assets/images/partnership/digitaraya-presents-simona.png",
              website: "https://instagram.com/simona.ventures",
              alt: "Digitaraya Presents Simona"
            },
          ]
        },
        {
          category: "company",
          title: "Company Partnership",
          institutions: [
            {
              logo: "./assets/images/partnership/jetbrains.png",
              website: "https://www.jetbrains.com/",
              alt: "JetBrains"
            },
          ]
        },
        {
          category: "media",
          title: "Media Partnership",
          institutions: [
            {
              logo: "./assets/images/partnership/chromplex.png",
              website: "https://www.instagram.com/chromplex/",
              alt: "Chromplex"
            },
            {
              logo: "./assets/images/partnership/teknoevent.png",
              website: "https://www.instagram.com/teknoevent/",
              alt: "Tekno Event"
            },
          ]
        },
        {
          category: "supported-by",
          title: "Supported By",
          institutions: [
            {
              logo: "./assets/images/partnership/gdgjakarta.png",
              website: "https://www.instagram.com/gdgjakarta/",
              alt: "GDG Jakarta"
            },
            {
              logo: "./assets/images/partnership/gdgdepok.png",
              website: "https://www.instagram.com/gdgdepok/",
              alt: "GDG Depok"
            },
          ]
        }
      ]
    }
  }

  renderTeamMember = (teamMember, squadName) => {
    if (teamMember.description.includes(squadName)) {
      return (
        <div
          className="card row col align-center justify-between w-min-200 mr-15 mb-15 px-15 py-20 w-max-200 border-1-grey">
          <div className="row col align-center">
            <div className="img-circle w-120 h-120 mb-20">
              <img src={teamMember.photo} alt={teamMember.name} />
            </div>
            <div className="font-size-normal color-font-text-title font-bold font-center mb-5">{teamMember.name}</div>
            <div
              className="font-size-small color-font-text-secondary font-center">{teamMember.institution}<br />{teamMember.description}
            </div>
            {teamMember.social_media.instagram !== "#" ? (
              <div className="row justify-center mt-20">
                <a className="color-font-text-primary px-5 mx-10" href={teamMember.social_media.instagram}
                  target="blank">
                  <i className="font-size-large fab fa-instagram"></i>
                </a>
                <a className="color-font-text-primary px-5 mx-10" href={teamMember.social_media.linkedin}
                  target="blank">
                  <i className="font-size-large fab fa-linkedin"></i>
                </a>
              </div>
            ) : (
                <div className="row justify-center mt-20" />
              )}
          </div>
        </div>
      )
    }
  };

  renderSquadMember = (squadName) => {
    return (
      <div className="mb-20 flex-1">
        <div className="font-size-title-small font-center mb-20">{squadName}</div>
        <div className="row-wrap justify-center">

          {this.state.teams.map(team => {
            return (
              <Fade>
                {this.renderTeamMember(team, squadName)}
              </Fade>
            )
          })}
        </div>
      </div>
    )
  };

  render() {
    return (
      <div>
        <Fade>
          <HeaderHero />
        </Fade>

        <Fade>
          <div className="bg-section-grey py-60">
            <div className="container">
              <div className="row col-md align-start">
                <div className="flex-1 col align-center font-center mr-10 mr-md-0 mb-md-20">
                  <img src={ItemSession} className="w-150" alt="item session" />
                  <div className="font-size-large font-bold">Sessions</div>
                  <p className="font-size-normal">
                    2 knowledgeable sessions, Tech Talk & Keynote.
                  </p>
                </div>
                <div className="flex-1 col align-center font-center">
                  <img src={ItemNetworking} className="w-150" alt="item session" />
                  <div className="font-size-large font-bold">Networking</div>
                  <p className="font-size-normal">
                    Best place to meet technical people and learn something new..! Grow your
                    network by interacting with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className="py-60">
          <div className="container">
            <div className="font-size-title-normal mb-30">Speakers</div>
            <div className="row-wrap justify-center">
              {this.state.speakers.map(speaker => (
                <Fade>
                  <div
                    className="card row col justify-center w-min-350 mr-15 mb-15 px-20 py-20 w-max-350 border-1-grey">
                    <div className="row align-center">
                      <div className="img-circle mr-20 w-120 w-min-120 h-120 h-min-120">
                        <img src={speaker.photo} alt={speaker.name} />
                      </div>
                      <div className="row col">
                        <div className="font-size-normal color-font-text-title font-bold mb-5">{speaker.name}</div>
                        <div className="font-size-small color-font-text-secondary mb-10">
                          {speaker.description && <span>{speaker.description}<br /></span>}
                          {speaker.role}<br />
                          {speaker.institution}
                        </div>
                        {speaker.social_media &&
                          <div className="row">
                            {speaker.social_media.instagram &&
                              <a className="color-font-text-primary px-5 mr-10" href={speaker.social_media.instagram}
                                target="blank">
                                <i className="font-size-large fab fa-instagram"></i>
                              </a>
                            }
                            {speaker.social_media.twitter &&
                              <a className="color-font-text-primary px-5 mr-10" href={speaker.social_media.twitter}
                                target="blank">
                                <i className="font-size-large fab fa-twitter"></i>
                              </a>
                            }
                            {speaker.social_media.github &&
                              <a className="color-font-text-primary px-5 mr-10" href={speaker.social_media.github}
                                target="blank">
                                <i className="font-size-large fab fa-github"></i>
                              </a>
                            }
                            {speaker.social_media.linkedin &&
                              <a className="color-font-text-primary px-5 mr-10" href={speaker.social_media.linkedin}
                                target="blank">
                                <i className="font-size-large fab fa-linkedin"></i>
                              </a>
                            }
                          </div>
                        }
                      </div>
                    </div>
                    {/* {speaker.talk_title &&
											<div className="font-size-small mt-20 font-center">{speaker.talk_title}</div>
										} */}
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-section-grey py-60">
          <div className="container">
            <div className="font-size-title-normal align-center font-center mb-30">Teams</div>
            <hr />
            <br />

            {this.renderSquadMember("Program")}
            {this.renderSquadMember("Developer")}
            {this.renderSquadMember("Sponsorship")}
            {this.renderSquadMember("Speaker")}

            {this.renderSquadMember("F&B")}

            <div className="row-wrap justify-center">
              {this.renderSquadMember("Creative")}
              {this.renderSquadMember("Media")}
              {this.renderSquadMember("Finance")}
              <div className="row">
                {this.renderSquadMember("Production")}
              </div>
            </div>

          </div>
        </div>

        <div className="py-40">
          {this.state.sponsors.map((sponsor, key) => (
            <Fade key={key}>
              <div className="pb-25">
                <div className="container">
                  <div className="font-size-title-normal mb-20">{sponsor.title}</div>
                  <div className="row-wrap">
                    {sponsor.institutions.map((institution, key) => (
                      <a href={institution.website} target="_blank" key={key} title={institution.alt}
                        className={`partner-item row align-center justify-center ${sponsor.category === 'company' ? 'h-160 p-15' : 'h-100 p-20'} w-min-200 w-max-200 m-5`}>
                        <img src={institution.logo} alt={institution.alt}
                          style={{ maxHeight: '100%', maxWidth: '100%' }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
