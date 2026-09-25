const unavailable = "Not available";

const facultyData = [
  {
    name: "Abhik Mukherjee",
    designation: "Associate Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/5dd78d8188470abhikPhoto.jpg",
    email: "abhik@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: unavailable,
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-abhik"
  },
  {
    name: "Amit Biswas",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/68b02c394777eFormal_Amit_H%20(1).png",
    email: "amitbiswas@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Distributed Systems, Cloud Computing, Multi-criteria Decision Making (MCDM), Blockchain Technology, Quantum Computing",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-amitbiswas"
  },
  {
    name: "Apurba Sarkar",
    designation: "Associate Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/69255e6b3af97510948582_9942185039234381_4863269382280843825_n.jpg",
    email: "apurba@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Digital Geometry, Combinatorial Geometry, Discrete Geometry, Computational Geometry, Image Processing, Shape Analysis, Shape Classification, Text Summarization",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-apurba"
  },
  {
    name: "Ashish Kumar Layek",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/ashishlayek_cst.jpg",
    email: "ashish@cs.iiests.ac.in",
    highestQualification: "M.E.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Wireless Telecommunication and Networking, Pattern Recognition, Computer Vision and Digital Image Processing",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-ashish"
  },
  {
    name: "Asit Kumar Das",
    designation: "Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/photo.png",
    email: "akdas@cs.iiests.ac.in",
    highestQualification: "Ph.D. (Engineering)",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Data Mining and Pattern Recognition, Social Networks, Bioinformatics, Machine Learning and Soft Computing, Text, Audio and Video Data Analysis",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-akdas"
  },
  {
    name: "Biplab K. Sikdar",
    designation: "Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/cst_bksikdar.jpg",
    email: "biplab@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Cellular Automata Research Group, Futuristic Computing",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-biplab"
  },
  {
    name: "Devleena Ghosh",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/69255d735f6cfWhatsApp%20Image%202025-11-24%20at%2013.13.50_1785e3c6.jpg",
    email: "devleena@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: unavailable,
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-devleena"
  },
  {
    name: "Jaya Sil",
    designation: "Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/5de528372c999photo-js.jpeg",
    email: "js@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Image Processing and Computer Vision, Machine Learning, Bio-Informatics, Soft Computing, Natural Language Processing",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-js"
  },
  {
    name: "Malay Kule",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/669e11b61a0261000003808.jpg",
    email: "malay@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Security Issues in Social Networking, Hardware Security, Cryptology, Defect Tolerance of Nanoscale Crossbar Circuits",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-malay"
  },
  {
    name: "Manas Hira",
    designation: "Associate Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/cst_mhira.jpg",
    email: "manas@cs.iiests.ac.in",
    highestQualification: "M.Tech.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Circuit Verification using Temporal Logic, Image Generation and Recognition - A Grammatical Approach",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-manas"
  },
  {
    name: "Nirnay Ghosh",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/5f9a84d7abd0433584458_1755658291192872_6819064364054609920_n.jpg",
    email: "nirnay@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Federated Learning, Blockchain and its Applications, Internet of Things (IoT) - Applications, Security, and System Integration",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-nirnay"
  },
  {
    name: "Samit Biswas",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/samit.jpg",
    email: "samit@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Data Mining and Pattern Recognition, Natural Language Processing and Its Application, Social Network Analysis, Machine-based Translation, Image Processing and Pattern Recognition",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-samit"
  },
  {
    name: "Sekhar Mandal",
    designation: "Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/sekhar__cst.jpg",
    email: "sekhar@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Image Processing, Pattern Recognition, Machine Learning",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-sekhar"
  },
  {
    name: "Sipra Das Bit",
    designation: "Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/5e5501ff1f488IMG-20191227-WA0005.jpg",
    email: "sb@cs.iiests.ac.in",
    highestQualification: "Ph.D. (Engineering)",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Mobile Computing, Wireless Sensor Network, Delay Tolerant Network and Its Usage in Smart City and Post-disaster Management System, IoT and Its Usage in Industrial Informatics",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-sb"
  },
  {
    name: "Soumen Moulik",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/68ad930906691Soumen.jpg",
    email: "soumen@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: unavailable,
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-soumen"
  },
  {
    name: "Sulata Mitra",
    designation: "Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/61234ce4eaa33IMG_20210823_125033.jpg",
    email: "sulata@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Ad-hoc Network, Multihomed Mobile Network, Mobile Computing, Disaster Management",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-sulata"
  },
  {
    name: "Surajeet Ghosh",
    designation: "Associate Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/sjg.png",
    email: "surajeet@cs.iiests.ac.in",
    highestQualification: "Ph.D.",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Computational Architecture for Next Generation Sequencing, Hardware Architecture for Network Routing Schemes, FPGA Based Embedded Systems Design, Routing Protocol for IoT Networks, Machine Learning for Embedded Systems",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-surajeet"
  },
  {
    name: "Tamal Pal",
    designation: "Assistant Professor",
    photograph: "https://oldwww1926.iiests.ac.in/assets/images/faculty/5dca99372efa6tamal_pal.jpg",
    email: "tamal@cs.iiests.ac.in",
    highestQualification: "Ph.D. (Engineering)",
    subjectsTeachingCurrentSemester: unavailable,
    researchAreas: "Image Processing, Video Processing, Multimedia Communication over Wireless Networks, Multimedia Security, AI and Machine Learning",
    officialProfile: "https://oldwww1926.iiests.ac.in/IIEST/Faculty/cs-tamal"
  }
];

window.facultyData = facultyData;
