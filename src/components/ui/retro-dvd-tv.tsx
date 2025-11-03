"use client";

import React, { useState, useEffect, useRef } from "react";

const RetroDvdTv = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState("swami-sivpal");
  const contentRef = useRef(null);
  const animationRef = useRef<number | null>(null);

  const swamiSivpalStory = [
    {
      chapter: "Chapter 1",
      title: "Atam Katha of Swami Vishwapal",
      image: "/guru/guru1-bg.png",
      content: `
Swami Vishwapal Saraswati and Gurukul Kanwashram

It is believed that in ancient times, there was an ashram of Maharishi Kanva in the dense forest about 15 km from Kotdwar in Uttarakhand and 50 km from Haridwar. This taposthali (place of penance) is where Bharata was born from Shakuntala and King Dushyant of Hastinapur. This mythology was beautifully composed by Mahakavi Kalidasa in "Abhigyan Shakuntalam," which has been translated into almost all foreign languages as "Shakuntala, The Recognition of Shakuntala, or The Sign of Shakuntalam."

Maharishi Kanva, an esteemed sage from the ancient era, holds a significant place in Hindu mythology and literature. He was an ancient sage of the Treta Yuga to whom some hymns of the Rigveda are ascribed. As one of the Angirasas, he was sometimes referred to as a son of Ghora and is considered one of the Saptarishis (seven most powerful sages).

Shakuntala was the daughter of Sage Vishwamitra and Menaka, a heavenly nymph. Raised by Sage Kanwa, she married Dushyant, the king of Hastinapur, and later gave birth to Veer Bharat, the ancestor of the Kuru clan. Her story forms an important part of the Mahabharata.

Abhigyan Shakuntalam, a Sanskrit drama by Mahakavi Kalidasa, is generally considered the greatest Indian literary work of any period. People from worldwide visit this ashram throughout the year to learn about India's spiritual heritage. It was here that Dr. Vishwapal Jayant established Gurukul Kanwashram.

During Pandit Jawaharlal Nehru's 16-day visit to Soviet Russia with his daughter Priyadarshini Indira Gandhi on June 7, 1955, the closing ceremony featured a film based on Kalidasa's "Abhigyan Shakuntalam." After the screening, the Russian Prime Minister asked Nehru about the beautiful historical story's location in India. Pandit Nehru, though familiar with the names of Maharishi Kanva, Dushyant, Shakuntala, and Veer Bharata, was unaware of Kanva Ashram's current status. He immediately decided to find this sacred place and build a beautiful monument there upon returning to India.

On June 23, 1955, Pandit Nehru assigned Dr. Sampurnanand, the then Chief Minister of Uttar Pradesh, the responsibility of constructing a memorial at Kanva Ashram. After extensive research and consultation with scholars, the memorial was founded at Kalalghat Chowkighat (Chauharata) near Kotdwar on Pausha Shukla Pratipada Samvat 2012 (1955 CE) by Shri Jagmohan Singh Negi, the MLA from Lansdowne. However, subsequent governments paid little attention to developing Kanva Ashram.

Vishwapal Jayant, the founder of Kanwashram, was born on Thursday, August 15, 1947 (Shravan Shukla Chaturdashi Samvat 2004), to mother Ziabai and father Shri Charan Singh Chaudhary in a farmer family in the historic village of Shauron (Soram) in Muzaffarnagar district, Uttar Pradesh. Born after his elder sister Suresho, his grandfather Shri Hoshiar Singh and grandmother affectionately called him "Iqbal." He received his early education in the village school.

Recognizing his qualities and nature, his Arya Samaji family admitted him to Arya Mahavidyalaya in Kirthal (now in Baghpat district), where during the Upanayana Sanskar, he was named Brahmachari Vishwapal. After passing his Prathama Examination, he received the title "Vidyabhaskar" and continued his studies at Gurukul Jwalapur in Haridwar. From childhood, Brahmachari Vishwapal showed interest in both studies and physical strength. Inspired by the spiritual ideas of Principal Pandit Lakshmi Narayan, he practiced rigorous yoga, pranayama, and asanas.

At sixteen, he began demonstrating amazing feats: breaking elephant chains, having tractors driven over his chest, bending

Following the Guru-Shishya tradition, he established an ashram in 1972 on the banks of the Malini River in Kanwashram, where yoga, practice, and meditation traditions continue.

Despite the foundation stone laid in 1955, no significant development occurred at Kanva Ashram until Yogiraj Brahmachari Vishwapal Jayant Ji visited at Swami Ramanand's behest. Captivated by the panoramic beauty, he felt a deep connection, as if returning to his own ashram, and began remembering his past lives. After three months of silent meditation, he decided to establish Gurukul Kanvashram to preserve this holy place and ancient Vedic culture.

On July 2, 1972, Yogiraj Vishwapal Jayant Ji arrived at the banks of the holy Malini River in Maharishi Kanva's Tapovan with two disciples—Brahmachari Yashveer and Brahmachari Rampal. The area was then a dreaded forest inhabited by lions, cheetahs, tigers, bears, elephants, snakes, and scorpions. Brahmachari Ji settled in the ruins near the dilapidated temple of Bharata, establishing Vedic Ashram Gurukul College Kanwashram.

The Gurukul's medium of instruction is Hindi (Arya language), alongside Sanskrit, yoga, and modern subjects like English, Mathematics, Science, History, Geography, Civics, and Computer Science. The institution's objective draws from an Atharvaveda mantra: "उपहरे गिरीणां संगमे च नदीनाम्, धिया विप्रो अजायत" - meaning intelligent knowledge is born at the confluence of mountain caves and rivers. The Gurukul aims to develop students into characterful, scholarly, patriotic, devoted, and self-reliant individuals through ancient Vedic education and modern learning.

Dr. Vishwapal's special attachment to Arya Mahavidyalaya Kirthal Gurukul led to him being named Vishwapal Jayant during the institution's Golden Jubilee. His demonstrations of power through yogic practice and brahmacharya spread his fame far and wide. Despite having all comforts, he grew disinterested in worldly life and retreated into silence for six months, leading to rumors of his death. His worried family found and brought him home, but yoga and pranayama remained his life's routine.

During a power demonstration in Kathmandu, Nepal, some Chinese attendees tried to disrupt the program, but he succeeded before 35,000 people, including the King of Nepal. Jealous individuals poisoned his food, reducing his weight from 140 kg to 70 kg. One night, he lost consciousness, and preparations were made for his cremation. However, at 4:00 AM, he miraculously regained consciousness, reporting that a long-bearded monk touched his neck and said, "Son, you still have much work to do," before disappearing.

After recovery, he started an Ayurvedic hospital on his ancestral farm in 1970-71, which gained popularity. Despite family pressure to marry, he refused. While planning to expand the hospital, he had a vision of the same monk who slapped his cheek and said, "I did not send you for this work." Immediately, Brahmachari left for Kanva Ashram without informing anyone.

On July 2, 1972, he began Gurukul with two students, facing obstacles from widows and hypocrites. In 1973, Brahmachari Ramveer was abducted, and animal bones were placed near the ashram to frame the Gurukul. Brahmachari Yashveer Shastri, Ramveer's brother, informed families and provided unwavering support.

In Kanva Ashram's dense forest, Brahmachari Ji encountered ferocious lions and elephants but, like Bharata (Shakuntala's son), remained fearless. His spiritual accomplishments allowed him to foresee events.

Once, while visiting the Malini River with disciples and visitors from Delhi, a strong breeze carrying the aroma of medicinal plants filled them with energy. On another occasion, he saw his grandmother who said, "I came to meet you," before disappearing, moving him to tears.

From then on, Vishwapal Jayant dedicated his life to upliftment, yoga education, and Ayurveda at Kanwashram. He became Swami Vishwapal Saraswati after initiation from Yogi Guru Swami Chidanand Saraswati, president of Parmarth Niketan Ashram. Beyond India, he conducts yoga camps in countries like Canada.
`
    }
  ];

  const storyChapters = [
    {
      chapter: "Chapter 1",
      title: "The Discovery of Shakuntala",
      image: "/chapter_image/ashram.jpg",
      content: "One day while strolling along the banks of river Malini, sage Kanv hears ferocious chirping of birds. Full of curiosity he goes to the spot to investigate the cause of commotion, in the otherwise peaceful jungle. He is happily surprised to find the birds hovering around a human child. He picks up the child and brings her to the ashram. As she was surrounded by birds he names her Shakuntala."
    },
    {
      chapter: "Chapter 2",
      title: "The Arrival of King Dushyant",
      image: "story.jpg",
      content: "Shakuntala grows up under the guidance of sage Kanv in the ashram. One day out on a hunt king Dushyant reaches the bank of river Malini. There he finds some sage collecting fire woods on its bank. On inquiring they tell him that they reside in Kanvashram which lies up ahead along the river. Leaving his soldiers behind Dushyant enters the ashram."
    },
    {
      chapter: "Chapter 3",
      title: "The Tale of Her Birth",
      image: "story.jpg",
      content: "The king is welcomed by an extremely charming young maiden. She cordially welcomes him into the ashram. Surprised at seeing a beautiful and charming maiden in the ashram Dushyant asks her as to who she is. Shakuntala then tells the king what has been told to her by father. That Lord Indra perturbed by the deep meditation of sage Vishvamitra plans to disturb his meditation. He therefore sends apsara Menka to earth. Menka is successful in seducing the sage and with their union a girl child is born to Menka. Having succeeded in her task she leaves the child in the jungle on the bank of river Malini and returns to her heavenly abode."
    },
    {
      chapter: "Chapter 4",
      title: "The Gandharva Marriage",
      image: "story.jpg",
      content: "Deeply impressed by the words, mannerism and captivated by the beauty of Shakuntala, Dushyant asks her to marry him. Shakuntala requests Dushyant to await the arrival of her father. Dushyant however insists on a Gandharv marriage. Reluctantly Shakuntala agrees but extracts a promise from Dushyant that the child born out of their union will be successor to his throne. Dushyant bitten by the desire to possess Shakuntala agrees. With the rites of a Gandharv marriage they unite. He also gives Shakuntala his royal ring as a present."
    },
    {
      chapter: "Chapter 5",
      title: "The Curse of Sage Durvasa",
      image: "story.jpg",
      content: "King Dushyant does not make any effort to get Shakuntala to his palace. One day lost in Dushyant thought Shakuntala fails to welcome sage Durvasa who arrives in the ashram. Enraged Durvasa curses Shakuntala that lost in whose thought she has not given him a befitting welcome in the ashram, will forget her. The inhabitants of the ashram are extremely shocked and disturbed when they hear of the curse. They implore the sage to forget and forgive and tell him all that has happened to Shakuntala. The sage Durvasa thereafter says that the curse once pronounced cannot be revoked but its effect can be reduced. He thereafter says that when Shakuntala will show something to that person, he will recollect his past and remember her."
    },
    {
      chapter: "Chapter 6",
      title: "The Lost Ring",
      image: "story.jpg",
      content: "Shakuntala subsequently gives birth to a boy child. He grows up in the ashram. Then one day on advice of sage Kanv, Shakuntala along with her son and some members of the ashram start a journey to meet king Dushyant in his capital. En route the journey they have to travel by a boat to cross the river. While travelling on the boat Shakuntala by mistake drops the royal ring in the river. Without the ring to remind the king, to undo the curse, Dushyant refuses to recognize Shakuntala. She pleads, but Dushyant is unmoved. Shakuntala, thereafter leaves his court and returns to Kanvashram."
    },
    {
      chapter: "Chapter 7",
      title: "The Ring in the Fish",
      image: "story.jpg",
      content: "Fortunately, a fisherman while cutting open a big fish he has netted, finds a ring in its stomach. While the fisherman was discussing the issue of the ring with his other fellow mates, it is overheard by the king's soldiers. The soldiers take the fisherman along with the ring to the king Dushyant. On seeing the ring Dushyant recollects all and is full of remorse. He gives gifts to the fisherman and the soldiers and sets off for Kanvashram as the effect of the curse of sage Durvasa was over."
    },
    {
      chapter: "Chapter 8",
      title: "The Reunion and Birth of Bharat",
      image: "story.jpg",
      content: "On entering the ashram he sees a child playing with ferocious lions who has opened his mouth to count his teeth. On inquiring the boy tells him that he is the son of Shakuntala. Dushyant thereafter accepts Shakuntala as his Queen and declares the child as prince, to be the future king or his successor. It was this son of Dushyant and Shakuntala who unified this huge land mass into one nation. The generation thereafter honoured him by calling this nation as 'BHARAT VARSH'."
    }
  ];

  const historicalChapters = [
    {
      chapter: "Historical Context",
      title: "Ancient Origins of Kanvashram",
      image: "history.jpg",
      content: "History of Kanvashram is extremely old, and entwined with the history of this nation and of human spiritual development on this planet. Innumerable references are made in regards to Kanvashram in all the ancient epics of this nation. These include The Mahabharat, Purans, Vedas and in the books written by great poet Kalidas."
    },
    {
      chapter: "Sacred Texts",
      title: "Glory in Skanda Purana",
      image: "history.jpg",
      content: "In the Skanda Purana the glory of Kanvashram is enumerated as follows: कण्वाश्रम समारभ्य यावन्नदं गिरिर्भवेत। तावत क्षेत्र परम भुक्ति-मुक्ति प्रदायकः।। कण्वो नाम महातेज महर्षिो लोक विश्रुतः। तस्याश्रम पदे नत्व भगवत रमापतिम् ।। 'The region stretching from Kanvashram to Nandgiri mountain is a very pious place and a center for meditation, yog, and enlightenment.'"
    },
    {
      chapter: "Ancient References",
      title: "Mahabharata and Megasthenes",
      image: "history.jpg",
      content: "In the biggest ancient epic of the world with one lakh couplets 'The Mahabharat' reference is made at a number of places about the presence of Kanvashram on the bank of river Malini. Reference is also made about Kanvashram by Megasthenes, Greek ambassador to the court of Emperor Chandra Gupta Maurya in his book 'INDIKA'."
    },
    {
      chapter: "British Era",
      title: "Cunningham's Report",
      image: "history.jpg",
      content: "Sir Cunningham, Chief Archeologist of India, during the British occupation of this nation, in one of his report of 1865 has corroborated that the river referred to by Megasthenes in his book INDIKA is indeed Malini, which flows in Garhwal and on whose banks Shakuntala grew up."
    },
    {
      chapter: "Dark Period",
      title: "Destruction by Invaders",
      image: "history.jpg",
      content: "After innumerable futile intrusions, the foreign invaders finally penetrated its boundaries and gained entry into this nation in 12th century. After establishing their authority in Delhi the Muslim invaders systematically looted and plundered all the religious and culturally important sites of this nation. Haridwar & its adjacent areas which included Kanvashram were looted and raised to ground. Further in 1227 the forces of Iltutmish attacked Bijnore, Mandavar and also plundered Kanvashram."
    },
    {
      chapter: "Modern Era",
      title: "British Arrival and Rediscovery",
      image: "history.jpg",
      content: "It was only in the 18th century that the British came to this region with an intention to hunt, seeing the abundant availability of wild life. Jim Corbett also came as a hunter to this region but dedicated his life in protecting the people of Garhwal & Kumaon region from."
    }
  ];

  const kalidasChapters = [
    {
      chapter: "The Poet",
      title: "Kalidas - The Legendary Dramatist",
      image: "kalidas.jpg",
      content: "Kalidas can be considered as one of the greatest writer, poet and dramatist of this nation. In one of his finest created drama 'Abhigyan Shakuntalam' Kalidas has presented a lively vivid description of Kanvashram. With his brilliant writing and narration he has made Kanvashram and all personalities Shakuntala, King Dushyant, sage Kanv, sage Vishvamitra, Bharat etc. connected with it immortal."
    },
    {
      chapter: "His Origins",
      title: "Kalidas and Uttarakhand",
      image: "kalidas.jpg",
      content: "From the detailed description of Kanvashram and its surrounding region enumerated in the drama it is evident that Kalidas was familiar with the location of Kanvashram which is situated in district-Pauri Garhwal in Uttarakhand. Hence in all likelihood Kalidas was born in Uttarakhand and spent considerable time here before moving to the court of Chandra Gupta-II, Vikramaditya (380-415) in Ujjain."
    },
    {
      chapter: "His Legacy",
      title: "Immortal Literary Masterpieces",
      image: "kalidas.jpg",
      content: "Kalidas's genius and brilliance were apparent to all since birth. He went on to create many more literary masterpieces like Kumarasambhava, Raghuvansham, Meghaduta, Ritusambhara, Malavi Kagnimitram etc. unparalleled in the history of this nation. Abhigyan Shakuntalam has been translated into majority of the world languages an unparalleled achievement by any standard."
    },
    {
      chapter: "His Impact",
      title: "Bringing Kanvashram to Life",
      image: "kalidas.jpg",
      content: "Setting aside all the historical facts, the person who actually brought Kanvashram out from the unknown depth of time into prominence through his last magnificent book 'Abhigyan Shakuntalam' was none other than the renowned poet KALIDAS. Though the ferocity of time, plundering and destruction by innumerable foreign invaders had eradicated the very physical existence of Kanvashram, thousands of years later poet Kalidas rejuvenated it from ashes by the strength and brilliance of his writing."
    }
  ];

  const archaeologyChapters = [
    {
      chapter: "1992 Discovery",
      title: "Monsoon Reveals Ancient Secrets",
      image: "murti.jpg",
      content: "The ferocity of the Monsoon rain in the year 1992 brought extremely heavy torrent of water down hill sweeping away the surface top soil in an area around Kanvashram to reveal the remains of an ancient civilization buried there in. The relics of the ancient monument lay scattered all over. The temple or the building may have come down due to its age but in most probability have been brought down by foreign invaders bent upon destroying the cultural heritage of this ancient nation."
    },
    {
      chapter: "Initial Studies",
      title: "University Investigation",
      image: "murti.jpg",
      content: "Primary studies were conducted by the staff of Srinagar Garhwal University who took some of the relics with them to Srinagar (Garhwal) for study. In a letter to ASI, India the university's concerned department has concluded that these stone relics belong to 10 to 12 century AD. No further effort was made by anyone to do excavation thereafter."
    },
    {
      chapter: "2012 Rains",
      title: "Second Discovery",
      image: "murti.jpg",
      content: "Fortunately in July 2012 about two decades later heavy monsoon rains once again eroded the soil uncovering of ancient structure. On this instant the Kanvashram Vikas Samiti took prompt action and forwarded all the photos of the site and the relics to the Director General, Archaeological Survey of India, New Delhi."
    },
    {
      chapter: "ASI Investigation",
      title: "Official Archaeological Survey",
      image: "murti.jpg",
      content: "DG, ASI, took positive view of the situation and a team headed by Superintending Archeologist Dehradun circle, Mr Atul Bhargava and Mr Pandey and Mr Verma came down to Kanvashram to investigate. A report prepared by the team was submitted to DG, ASI, New Delhi. The age of the relics or structure found was approximately dated from 9 to 12th century AD."
    },
    {
      chapter: "2016 Finding",
      title: "Finely Carved Relic",
      image: "murti.jpg",
      content: "In Feb 2016 a finely carved piece of relic was found in the area and this information was again forwarded to DG, ASI, New Delhi by the Kanvashram Vikas Samiti. This time also another team headed by Superintending Archeologist Dehradun circle Dr Nauriyal came and did further investigation. The report and further investigation by ASI is awaited."
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setScrollPosition(prev => {
          const newPos = prev + 0.03;
          return newPos >= 100 ? 0 : newPos;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const renderContent = () => {
    let chapters = [];
    switch (activeTab) {
      case "swami-sivpal":
        chapters = swamiSivpalStory;
        break;
      case "story":
        chapters = storyChapters;
        break;
      case "history":
        chapters = historicalChapters;
        break;
      case "kalidas":
        chapters = kalidasChapters;
        break;
      case "archaeology":
        chapters = archaeologyChapters;
        break;
      default:
        chapters = swamiSivpalStory;
    }

    return (
      <div className="space-y-12">
        {chapters.map((chapter, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2">
              <div className="w-full h-64 bg-gradient-to-br from-[#e2d5c1]/70 to-[#F8F8F2]/70 border-2 border-[#88734C] rounded-lg flex items-center justify-center overflow-hidden shadow-[0_8px_24px_rgba(50,47,41,0.18)]">
                <img
                  src={chapter.image}
                  alt="Chapter visual"
                  className="w-full h-full object-cover md:w-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#88734C]">
                {chapter.title}
              </h2>
              <p className="text-[#2e2a22] text-justify text-base leading-relaxed">
                {chapter.content}
              </p>
              <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#c1a062] to-transparent mx-auto"></div>
            </div>
          </div>
        ))}
        <div className="text-center py-8 text-[#c1a062] italic text-lg">
          ~ End of {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ~
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[100vh] w-[90vw] mx-auto font-serif">
      <div className="py-8 md:flex md:space-x-4 relative">
        <div className="pointer-events-none absolute inset-y-0 right-[-1%] hidden w-[40%] translate-y-[-10%] rotate-6 text-[#c1a062]/15 blur-0 lg:block">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path
              d="M200 40c23.5 36.5 44 103 44 140s-20.5 72-44 100c-23.5-28-44-63-44-100s20.5-103.5 44-140Zm0 0c-39.5 21.5-82 61.5-98 95-16 33.5-14 70 0 96 26-18 69-35 98-41m0-150c39.5 21.5 82 61.5 98 95 16 33.5 14 70 0 96-26-18-69-35-98-41m0-110c-19 0-52 16.5-70 34s-30 42.5-30 58c24-7 57.5-12 100-12m0-80c19 0 52 16.5 70 34s30 42.5 30 58c-24-7-57.5-12-100-12"
              className="stroke-current/40"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <div className="hero-header text-center md:text-left mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#88734C] font-serif">वैदिक गुरुकुल कण्वाश्रम</h1>
            <p className="text-sm md:text-base text-[#c1a062] italic mt-2">
              Where Mythology Meets History, Poetry & Archaeology
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-2 md:gap-3 flex-wrap">
            {["swami-sivpal", "story", "history", "kalidas", "archaeology"].map(tab => (
              <button
                key={tab}
                className={`flex-1 md:flex-none py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab
                  ? "bg-gradient-to-r from-[#88734C] to-[#CBAA6F] text-[#2e2a22]"
                  : "bg-[#F8F8F2]/70 text-[#88734C] border border-[#c1a062]"
                  } hover:scale-105 hover:shadow-lg hover:shadow-[#c1a062]/30`}
                onClick={() => {
                  setActiveTab(tab);
                  setScrollPosition(0);
                }}
              >
                {tab === "swami-sivpal" ? "📒 Swami ji atmakatha" :
                  tab === "story" ? "📜 Story" :
                    tab === "history" ? "📖 History" :
                      tab === "kalidas" ? "✍️ Kalidas" :
                        "🗿 Archaeology"}
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-3/4">
          <div className="w-full rounded-[1.75rem] border border-[#e2d5c1]/70 shadow-[0_24px_80px_rgba(50,47,41,0.18)] bg-gradient-to-b from-[#F2F2EB]/70 to-[#F8F8F2]/70">
            <div className="w-full h-[90vh] md:h-[80vh] rounded overflow-hidden">
              {activeTab === "swami-sivpal" ? (
                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-6 h-full">
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="w-full h-64 md:h-[80vh] bg-gradient-to-br from-[#e2d5c1]/70 to-[#F8F8F2]/70 border-2 border-[#88734C] rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(50,47,41,0.18)]">
                        <img
                          src={swamiSivpalStory[0].image}
                          alt="Swami visual"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3 h-full overflow-hidden">
                      <div
                        className="pr-2"
                        style={{
                          transform: `translateY(-${scrollPosition}%)`,
                          transition: isPlaying ? "none" : "transform 0.3s ease"
                        }}
                      >
                        <div className="space-y-8">
                          {swamiSivpalStory.map((item, idx) => (
                            <div key={idx} className="space-y-4">
                              <h2 className="font-serif text-2xl md:text-3xl text-[#88734C]">
                                {item.title}
                              </h2>
                              <p className="text-[#2e2a22] text-justify text-base leading-relaxed whitespace-pre-line">
                                {item.content}
                              </p>
                              <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#c1a062] to-transparent mx-auto"></div>
                            </div>
                          ))}
                          <div className="text-center py-8 text-[#c1a062] italic text-lg">
                            ~ End of Swami Ji Atmakatha ~
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-4 md:p-6"
                  style={{
                    transform: `translateY(-${scrollPosition}%)`,
                    transition: isPlaying ? "none" : "transform 0.3s ease"
                  }}
                >
                  {renderContent()}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center p-2 md:p-4">
              <div className="w-16 md:w-24 h-8 md:h-12 bg-[#e2d5c1]/70 rounded bg-[radial-gradient(circle_at_center,#2e2a22_0.1rem,transparent_0.15rem)] bg-[length:0.5rem_0.5rem]"></div>
              <div className="flex gap-2">
                <button
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e2d5c1]/70 text-[#88734C] border-2 border-[#c1a062] flex items-center justify-center text-lg md:text-xl hover:bg-gradient-to-r hover:from-[#88734C] hover:to-[#CBAA6F] hover:text-[#2e2a22] hover:scale-110 transition-all duration-300"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>
                <button
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e2d5c1]/70 text-[#88734C] border-2 border-[#c1a062] flex items-center justify-center text-lg md:text-xl hover:bg-gradient-to-r hover:from-[#88734C] hover:to-[#CBAA6F] hover:text-[#2e2a22] hover:scale-110 transition-all duration-300"
                  onClick={() => setScrollPosition(0)}
                  title="Restart"
                >
                  ↺
                </button>
              </div>
              <div className="w-16 md:w-24 h-8 md:h-12 bg-[#e2d5c1]/70 rounded bg-[radial-gradient(circle_at_center,#2e2a22_0.1rem,transparent_0.15rem)] bg-[length:0.5rem_0.5rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroDvdTv;