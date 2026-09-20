import { useEffect, useState } from 'react';
import lecturers from './data/lecturers.js';
import { APPLY_URL, ENQUIRY_URL } from './config/externalUrls.js';

const navigation = [
  ['introduction', 'Introduction'],
  ['synopsis', 'Synopsis'],
  ['careers', 'Job Prospects'],
  ['direction', 'Vision & Mission'],
  ['peo', 'PEO'],
  ['plo', 'PLO'],
  ['curriculum', 'Programme Structure'],
  ['tracks', 'Tracks'],
];

const shellSections = [
  ['introduction', '01', 'Introduction'],
  ['synopsis', '02', 'Synopsis'],
  ['careers', '03', 'Job Prospects'],
  ['direction', '04', 'Vision & Mission'],
  ['peo', '05', 'Programme Educational Objectives'],
  ['plo', '06', 'Programme Learning Outcomes'],
  ['curriculum', '07', 'Programme Structure'],
  ['tracks', '08', 'Technology Tracks'],
  ['leadership', '09', 'Programme Leadership'],
  ['academic-team', '10', 'Academic Team'],
];

const careerGroups = {
  'Software development': [
    'Computer Application Programmer', 'Database Programmer', 'Software Developer',
    'Software Tester', 'System Programmer', 'System Analysts Assistant',
  ],
  'Web technology': ['Internet Programmer', 'Web Programmer', 'Web Designer', 'Web Developer'],
  Networking: [
    'Network Support Personnel', 'Network Administrator', 'IT Supports Engineer',
    'Assistant Network Engineer',
  ],
  Cybersecurity: [
    'Assistant Security Analysis', 'Assistant Information Security Engineer',
    'Assistant Penetration Tester',
  ],
  'Data & analytics': [
    'Assistant Data Analysis', 'Assistant Data Scientist', 'Assistant Data Analyst',
    'Business Intelligence Analyst', 'Junior Data Visualization', 'Junior Statistician',
    'Junior Data Insights and Visualization',
  ],
  'IT support': ['System Support Personnel', 'Technical Helpdesk / Support'],
};

const directionItems = [
  ['direction-vision', 'DIR // 01', 'Vision', 'To be the Leading-Edge TVET Institution.'],
  ['direction-mission', 'DIR // 02', 'Mission', 'To provide wide access to quality and recognized TVET programs; to empower communities through lifelong learning; to develop holistic, entrepreneurial and balanced graduates; and to capitalise on smart partnership with stakeholders.'],
  ['educational-goal', 'DIR // 03', 'Educational Goal', 'To produce holistic and competent TVET graduates capable of contributing to the national development.'],
  ['programme-aim', 'DIR // 04', 'Programme Aim', 'The programme believes that every individual has potential to foster adaptable and responsible Information and Communication Technology (ICT) Assistant with new technological advancement in supporting the national digital initiative transformation agenda.'],
];

const peos = [
  ['PEO1', 'Technical knowledge & problem solving', 'Computer technicians have basic knowledge with numeracy and technical skill to solve well-defined and routine problems in computing in line with the industry requirements.'],
  ['PEO2', 'Supervision, communication & interpersonal skills', 'Computer technicians have the supervisory ability and good interpersonal and communication skills to interact in various environments.'],
  ['PEO3', 'Lifelong learning & entrepreneurship', 'Computer technicians have a commitment to lifelong learning and an entrepreneurial mindset for self and career development.'],
  ['PEO4', 'Ethics & professional practice', 'Computer technicians who are committed to ethical conduct and professional practices in the organization and society.'],
];

const plos = [
  ['PLO1', 'Knowledge', 'Explain concepts, principles and theories relating to Information Technology.'],
  ['PLO2', 'Cognitive / design', 'Apply design and architecture to Information Technology solutions using appropriate tools and techniques.'],
  ['PLO3', 'Practical skills', 'Perform support and development tasks on Information Technology solutions related to job functions.'],
  ['PLO4', 'Interpersonal skills', 'Demonstrate effective interaction with stakeholders and society in a work-related environment.'],
  ['PLO5', 'Communication', 'Exhibit effective communication with stakeholders and society in a work-related environment.'],
  ['PLO6', 'Digital skills', 'Use appropriate digital tools on computing related to job functions.'],
  ['PLO7', 'Numeracy', 'Apply appropriate numerical skills in computing related to job functions.'],
  ['PLO8', 'Leadership & responsibility', 'Demonstrate supervisory skills and responsibility in executing instructions related to job functions.'],
  ['PLO9', 'Lifelong learning', 'Commit to principles of lifelong learning in academic and career development.'],
  ['PLO10', 'Entrepreneurship', 'Demonstrate an entrepreneurial mindset in performing tasks.'],
  ['PLO11', 'Ethics & professionalism', 'Commit to professional and ethical practices in executing instructions related to the job and organizational functions.'],
];

const trackOptions = [
  ['SAD', 'Software & Application Development'],
  ['NS', 'Networking System'],
  ['IS', 'Information Security'],
];

const semesterOptions = ['01', '02', '03', '04', '05', '06'];

const commonCourses = {
  '01': [
    ['Core Computing', 'DFC10353', 'Programming Fundamentals', 'L 02 · P 02 · T 00 · CR 03'],
    ['Core Computing', 'DFC10263', 'Computer Architecture', 'L 02 · P 02 · T 00 · CR 03'],
    ['Core Computing', 'DFC10273', 'Operating Systems', 'L 02 · P 02 · T 00 · CR 03'],
    ['Core Computing', 'DBM10143', 'Calculus and Algebra', 'L 02 · P 00 · T 02 · CR 03'],
    ['Compulsory', 'MPU22153', 'English for Digital Technology', 'L 02 · P 00 · T 02 · CR 03'],
  ],
  '02': [
    ['Core Computing', 'DFC20283', 'Database Fundamentals', 'L 02 · P 02 · T 00 · CR 03'],
    ['Core Computing', 'DFC20293', 'Network and Data Communication', 'L 02 · P 03 · T 00 · CR 03'],
    ['Core Computing', 'DFC20313', 'Cybersecurity Fundamentals', 'L 02 · P 03 · T 00 · CR 03'],
    ['Discipline Core', 'DFK20013', 'Web Design Technology', 'L 02 · P 03 · T 00 · CR 03'],
    ['Core Computing', 'DBM20153', 'Discrete Mathematics', 'L 02 · P 00 · T 02 · CR 03'],
  ],
  '03': [
    ['Core Computing', 'DBM30263', 'Statistics and Probability', 'L 02 · P 02 · T 00 · CR 03'],
    ['Core Computing', 'DFC30333', 'Ethics in Computing', 'L 02 · P 03 · T 00 · CR 03'],
    ['Discipline Core', 'DFK30023', 'User Experience Fundamentals', 'L 02 · P 03 · T 00 · CR 03'],
    ['Discipline Core', 'DFK30033', 'Cyberpreneurship', 'L 02 · P 03 · T 00 · CR 03'],
    ['Discipline Core', 'DFK30053', 'Object Oriented Programming', 'L 02 · P 03 · T 00 · CR 03'],
  ],
  '04': [
    ['Core Computing', 'DFC40343', 'System Analysis and Design Fundamentals', 'L 02 · P 02 · T 00 · CR 03'],
    ['Discipline Core', 'DFK40063', 'Server Administration', 'L 02 · P 03 · T 00 · CR 03'],
    ['Discipline Core', 'DFK40073', 'Cloud Computing', 'L 02 · P 03 · T 00 · CR 03'],
  ],
  '05': [
    ['Discipline Core', 'DFK50083', 'Python Programming', 'L 02 · P 03 · T 00 · CR 03'],
    ['Discipline Core', 'DFK50093', 'Computer Network Security', 'L 02 · P 03 · T 00 · CR 03'],
    ['Compulsory', 'MPU21072', 'Penghayatan Etika dan Peradaban', 'L 01 · P 00 · T 02 · CR 02'],
  ],
  '06': [['Industrial Training', 'DUT60089', 'Industrial Training', 'L 00 · P 00 · T 00 · CR 09']],
};

const trackElectives = {
  SAD: {
    '03': [['Structure Elective', 'DFP30313', 'Digital Multimedia', 'L 01 · P 04 · T 00 · CR 03']],
    '04': [
      ['Structure Elective', 'DFP40433', 'Business Intelligence', 'L 01 · P 04 · T 00 · CR 03', 'DFC20283'],
      ['Structure Elective', 'DFP40443', 'Full Stack Web Development', 'L 01 · P 04 · T 00 · CR 03', 'DFC20283, DFK20013'],
      ['Structure Elective', 'DFP40453', 'Mobile Application Development', 'L 01 · P 03 · T 00 · CR 03', 'DFK30053'],
    ],
    '05': [['Structure Elective', 'DFP50463', 'Java-Based Application Development', 'L 02 · P 03 · T 00 · CR 03', 'DFC20283, DFK30053']],
  },
  NS: {
    '03': [['Structure Elective', 'DFN30533', 'Switching and Routing Essentials', 'L 01 · P 04 · T 00 · CR 03', 'DFC20293']],
    '04': [
      ['Structure Elective', 'DFN40503', 'Embedded Internet of Things (IoT)', 'L 02 · P 03 · T 00 · CR 03'],
      ['Structure Elective', 'DFN40543', 'Enterprise Network', 'L 01 · P 04 · T 00 · CR 03'],
      ['Structure Elective', 'DFN40553', 'Structured Cabling in Networking', 'L 01 · P 04 · T 00 · CR 03'],
    ],
    '05': [['Structure Elective', 'DFN50563', 'Advanced Server Administration', 'L 01 · P 04 · T 00 · CR 03']],
  },
  IS: {
    '03': [['Structure Elective', 'DFS30273', 'Information Security', 'L 02 · P 03 · T 00 · CR 03']],
    '04': [
      ['Structure Elective', 'DFS40293', 'Ethical Hacking', 'L 02 · P 03 · T 00 · CR 03'],
      ['Structure Elective', 'DFS40303', 'Information Security Management System', 'L 02 · P 02 · T 00 · CR 03'],
      ['Structure Elective', 'DFS40373', 'Malware Analysis', 'L 01 · P 04 · T 00 · CR 03'],
    ],
    '05': [['Structure Elective', 'DFS50383', 'Digital Forensic', 'L 01 · P 04 · T 00 · CR 03']],
  },
};

const trackFocus = {
  SAD: ['Digital Multimedia', 'Business Intelligence', 'Full Stack Web Development', 'Mobile Application Development', 'Java-Based Application Development'],
  NS: ['Switching and Routing Essentials', 'Embedded Internet of Things (IoT)', 'Enterprise Network', 'Structured Cabling in Networking', 'Advanced Server Administration'],
  IS: ['Information Security', 'Ethical Hacking', 'Information Security Management System', 'Malware Analysis', 'Digital Forensic'],
};

const leadership = [
  ['Head of Department', 'Ts. Ainie Hayati binti Noruzman', 'Department of Information and Communication Technology', 'ainiehayati@puo.edu.my'],
  ['Head of Programme · SAD', 'Saiful Baharin bin Hairuddin', 'Software & Application Development', 'sbaharin@puo.edu.my'],
  ['Head of Programme · NS', 'Sharifah Nur binti Syed Ismail', 'Networking System', 'sharifahnur@puo.edu.my'],
  ['Head of Programme · IS', 'Azrahayu binti Abdul Aziz', 'Information Security', 'aazrahayu@puo.edu.my'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [activeCareer, setActiveCareer] = useState('Software development');
  const [expandedPeo, setExpandedPeo] = useState(null);
  const [expandedPlo, setExpandedPlo] = useState(null);
  const [activeTrack, setActiveTrack] = useState('SAD');
  const [activeSemester, setActiveSemester] = useState('01');
  const [teamFilter, setTeamFilter] = useState('ALL');
  const [teamQuery, setTeamQuery] = useState('');

  useEffect(() => {
    const sections = shellSections.map(([id]) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px' },
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          DIT <span>//</span> JTMK.PUO
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true">{menuOpen ? '×' : '＋'}</span>
        </button>
        <nav
          id="site-navigation"
          className={`site-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Programme sections"
        >
          {navigation.map(([id, label]) => (
            <a
              className={activeSection === id ? 'is-active' : ''}
              href={`#${id}`}
              key={id}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="header-status">SYSTEM // ONLINE</span>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">JTMK / DIT <span>POLITEKNIK UNGKU OMAR</span></p>
            <h1 id="hero-title">
              Diploma in
              <br />
              Information
              <br />
              Technology<span className="accent-dot">.</span>
            </h1>
            <p className="hero-lede">
              Build practical technology skills. Choose your pathway. Shape your digital future.
            </p>
            <a className="primary-action" href="#introduction">
              Explore the Programme <span aria-hidden="true">↓</span>
            </a>
          </div>
          <aside className="programme-status" aria-label="Programme status">
            <div className="status-heading">
              <span>PROGRAMME // DIT</span>
              <span className="status-dot" aria-hidden="true" />
            </div>
            <div className="status-grid">
              <div><span>Duration</span><strong>03 years</strong></div>
              <div><span>Semesters</span><strong>06</strong></div>
              <div><span>Total credits</span><strong>95</strong></div>
              <div><span>Technology tracks</span><strong className="accent-text">03</strong></div>
            </div>
            <p className="status-footer">LEARNING // HANDS-ON</p>
          </aside>
        </section>

        <div className="story-sections">
          <section className="content-section editorial-section" id="introduction" aria-labelledby="introduction-heading">
            <div>
              <p className="section-label">01 / Introduction</p>
              <h2 id="introduction-heading">Technology education built for the future.</h2>
            </div>
            <div className="editorial-body">
              <p>To keep abreast with rapid technological advancements and evolving industry requirements, the Department of Polytechnic & Community College Education has worked with key industry players to develop and review the ICT curriculum.</p>
              <p>The programme blends classroom instruction with structured simulated real-life working experience. Its curriculum is aligned with industry-led learning and professional certification opportunities so students develop relevant knowledge and skills for the ICT industries.</p>
              <div className="metadata-grid">
                <div><span>Programme</span><strong>Diploma in Information Technology</strong></div>
                <div><span>Field</span><strong>Information Technology</strong></div>
                <div><span>Department</span><strong>Department of Information and Communication Technology</strong></div>
                <div><span>Institution</span><strong>Politeknik Ungku Omar</strong></div>
              </div>
            </div>
          </section>

          <section className="content-section synopsis-section" id="synopsis" aria-labelledby="synopsis-heading">
            <div>
              <p className="section-label">02 / Synopsis</p>
              <h2 id="synopsis-heading">Learn.<br />Build.<br />Adapt.</h2>
            </div>
            <div className="synopsis-body">
              <p>This programme provides education and training in the Computing field with a specific emphasis on Information Technology. It gives students opportunities to enter a broad range of ICT careers and develops transferable skills and multiskilling so they can adapt to new technologies.</p>
              <p>Alongside technical courses, students develop soft skills through English for Digital Technology, ethics and civilisation, Pengajian Islam or Pendidikan Moral, and co-curriculum. Self-initiated learning and hands-on competencies prepare graduates for the challenges of computing technologies.</p>
              <div className="keyword-grid" aria-label="Programme learning themes">
                {['Information Technology', 'Computing', 'Hands-on competencies', 'Transferable skills', 'Multiskilling', 'Self-initiated learning'].map((keyword) => <span key={keyword}>{keyword}</span>)}
              </div>
            </div>
          </section>

          <section className="content-section careers-section" id="careers" aria-labelledby="careers-heading">
            <div className="section-heading-row">
              <div><p className="section-label">03 / Career pathways</p><h2 id="careers-heading">Where can DIT take you?</h2></div>
              <p className="section-intro">The programme provides knowledge and skills that can be applied across ICT industries and businesses.</p>
            </div>
            <div className="career-explorer">
              <div className="career-tabs" role="tablist" aria-label="Career categories">
                {Object.keys(careerGroups).map((category) => <button key={category} className={activeCareer === category ? 'is-active' : ''} type="button" role="tab" aria-selected={activeCareer === category} onClick={() => setActiveCareer(category)}>{category}</button>)}
              </div>
              <div className="career-results" role="tabpanel">
                <p className="result-label">ROLES // {String(careerGroups[activeCareer].length).padStart(2, '0')}</p>
                <div className="role-list">{careerGroups[activeCareer].map((role, index) => <div className="role-item" key={role}><span>{String(index + 1).padStart(2, '0')}</span><strong>{role}</strong></div>)}</div>
              </div>
            </div>
          </section>

          <section className="content-section direction-section" id="direction" aria-labelledby="direction-heading">
            <div className="section-heading-row"><div><p className="section-label">04 / Direction</p><h2 id="direction-heading">Purpose beyond technology.</h2></div><p className="section-intro">The programme sits within a wider TVET direction focused on capable, adaptable, and responsible graduates.</p></div>
            <div className="direction-grid">{directionItems.map(([id, code, title, copy]) => <article className="direction-card" id={id} key={id}><p className="card-code">{code}</p><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </section>

          <section className="content-section outcome-section" id="peo" aria-labelledby="peo-heading">
            <div className="section-heading-row"><div><p className="section-label">05 / PEO</p><h2 id="peo-heading">Who our graduates become.</h2></div><p className="section-intro">Four programme educational objectives describe the professional foundation graduates are prepared to build.</p></div>
            <div className="outcome-grid">{peos.map(([id, title, statement]) => { const expanded = expandedPeo === id; return <article className={`outcome-card${expanded ? ' is-expanded' : ''}`} key={id}><button type="button" aria-expanded={expanded} aria-controls={`${id}-statement`} onClick={() => setExpandedPeo(expanded ? null : id)}><span>{id}</span><strong>{title}</strong><b aria-hidden="true">{expanded ? '−' : '+'}</b></button><div id={`${id}-statement`} className="outcome-statement" hidden={!expanded}><p>{statement}</p></div></article>; })}</div>
          </section>

          <section className="content-section outcome-section" id="plo" aria-labelledby="plo-heading">
            <div className="section-heading-row"><div><p className="section-label">06 / PLO</p><h2 id="plo-heading">11 outcomes.<br />One foundation.</h2></div><p className="section-intro">Upon completion of the programme, students should be able to demonstrate these learning outcomes.</p></div>
            <div className="plo-grid">{plos.map(([id, title, statement]) => { const expanded = expandedPlo === id; return <article className={`outcome-card plo-card${expanded ? ' is-expanded' : ''}`} key={id}><button type="button" aria-expanded={expanded} aria-controls={`${id}-statement`} onClick={() => setExpandedPlo(expanded ? null : id)}><span>{id}</span><strong>{title}</strong><b aria-hidden="true">{expanded ? '−' : '+'}</b></button><div id={`${id}-statement`} className="outcome-statement" hidden={!expanded}><p>{statement}</p></div></article>; })}</div>
          </section>

          <section className="content-section curriculum-section" id="curriculum" aria-labelledby="curriculum-heading">
            <div className="section-heading-row"><div><p className="section-label">07 / Curriculum</p><h2 id="curriculum-heading">Your 6-semester technology journey.</h2></div><p className="section-intro">Select a pathway and semester to inspect the programme structure.</p></div>
            <div className="curriculum-controls">
              <div><p className="control-label">Track</p><div className="control-row" role="tablist" aria-label="Technology track">{trackOptions.map(([code, title]) => <button type="button" key={code} className={activeTrack === code ? 'is-active' : ''} role="tab" aria-selected={activeTrack === code} title={title} onClick={() => setActiveTrack(code)}>{code}</button>)}</div></div>
              <div><p className="control-label">Semester</p><div className="control-row" role="tablist" aria-label="Semester">{semesterOptions.map((semester) => <button type="button" key={semester} className={activeSemester === semester ? 'is-active' : ''} role="tab" aria-selected={activeSemester === semester} onClick={() => setActiveSemester(semester)}>{semester}</button>)}</div></div>
            </div>
            <div className="curriculum-summary"><span>{activeTrack} // {trackOptions.find(([code]) => code === activeTrack)?.[1]}</span><strong>SEMESTER {activeSemester}</strong></div>
            <div className="course-grid">{[...(commonCourses[activeSemester] || []), ...(trackElectives[activeTrack]?.[activeSemester] || [])].map(([classification, code, name, hours, prerequisite]) => <article className="course-card" key={code}><p className="card-code">{classification}</p><p className="course-code">{code}</p><h3>{name}</h3><p className="course-hours">{hours}</p>{prerequisite && <p className="course-prerequisite">Prerequisite: {prerequisite}</p>}</article>)}</div>
            {activeSemester === '05' && <article className="special-course project-course"><div><p className="section-label">SEM // 05 · PROJECT</p><p className="course-code">DFT50194</p><h3>Integrated Project</h3></div><div><strong>04 CREDITS</strong><p>Prerequisite: all core computing courses</p></div></article>}
            {activeSemester === '06' && <article className="special-course training-course"><div><p className="section-label">SEM // 06</p><p className="course-code">DUT60089</p><h3>Industrial<br />Training</h3></div><div><strong>09 CREDITS</strong><p>Industry experience // transition to practice</p></div></article>}
          </section>

          {shellSections.filter(([id]) => !['introduction', 'synopsis', 'careers', 'direction', 'peo', 'plo', 'curriculum'].includes(id)).map(([id, number, label]) => (
            id === 'tracks' ? <section className="content-section tracks-section" id={id} key={id} aria-labelledby="tracks-heading"><div className="section-heading-row"><div><p className="section-label">08 / Specialisation</p><h2 id="tracks-heading">Choose your technology track.</h2></div><p className="section-intro">Three specialised pathways. One strong IT foundation.</p></div><div className="track-grid">{trackOptions.map(([code, title], index) => <article className={`track-card${activeTrack === code ? ' is-selected' : ''}`} key={code}><div><p className="card-code">TRACK // {String(index + 1).padStart(2, '0')}</p><span className="track-code">{code}</span><h3>{title}</h3></div><ul>{trackFocus[code].map((subject) => <li key={subject}>{subject}</li>)}</ul><button type="button" onClick={() => { setActiveTrack(code); document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore track <span aria-hidden="true">→</span></button></article>)}</div></section> : id === 'leadership' ? <section className="content-section leadership-section" id={id} key={id} aria-labelledby="leadership-heading"><div className="section-heading-row"><div><p className="section-label">09 / Leadership</p><h2 id="leadership-heading">Programme leadership.</h2></div><p className="section-intro">Confirmed programme contacts for the Department of Information and Communication Technology.</p></div><div className="leadership-grid">{leadership.map(([role, name, area, email]) => <article className="leader-card" key={email}><p className="card-code">{role}</p><h3>{name}</h3><p>{area}</p><a href={`mailto:${email}`}>{email} ↗</a></article>)}</div></section> : id === 'academic-team' ? <section className="content-section team-section" id={id} key={id} aria-labelledby="team-heading"><div className="section-heading-row"><div><p className="section-label">10 / Academic team</p><h2 id="team-heading">Meet the people behind DIT.</h2></div><p className="section-intro">Search the confirmed academic directory by name, email, or track.</p></div><div className="team-tools"><div className="team-filters" role="tablist" aria-label="Academic team filter">{['ALL', 'SAD', 'NS', 'IS'].map((filter) => <button type="button" role="tab" aria-selected={teamFilter === filter} className={teamFilter === filter ? 'is-active' : ''} key={filter} onClick={() => setTeamFilter(filter)}>{filter}</button>)}</div><label className="team-search"><span className="sr-only">Search academic team</span><input value={teamQuery} onChange={(event) => setTeamQuery(event.target.value)} placeholder="Search academic team..." /></label></div><div className="team-grid">{lecturers.filter(([name, email, track]) => { const haystack = `${name} ${email} ${track}`.toLowerCase(); return (teamFilter === 'ALL' || track === teamFilter) && haystack.includes(teamQuery.toLowerCase()); }).map(([name, email, track]) => <article className="leader-card team-card" key={`team-${email}`}><p className="card-code">STAFF // {track}</p><h3>{name}</h3><p>{trackOptions.find(([code]) => code === track)?.[1]}</p><a href={`mailto:${email}`}>{email} ↗</a><span className="team-role">{track}</span></article>)}</div></section> : <section className="placeholder-section" id={id} key={id} aria-labelledby={`${id}-heading`}><p className="section-label">{number} / {label}</p><h2 id={`${id}-heading`}>{label}</h2><p className="placeholder-copy">Programme content arrives in the next implementation card.</p></section>
          ))}

          <section className="final-cta" aria-labelledby="final-cta-heading">
            <p className="section-label">DIT // JTMK.PUO</p>
            <h2 id="final-cta-heading">Build what&apos;s next.</h2>
            <p>Start your technology journey with the Diploma in Information Technology at Politeknik Ungku Omar.</p>
            <div className="cta-actions">
              {APPLY_URL ? <a className="primary-action" href={APPLY_URL}>Apply now <span aria-hidden="true">↗</span></a> : <span className="primary-action is-disabled" aria-disabled="true">Apply now <span aria-hidden="true">↗</span></span>}
              {ENQUIRY_URL ? <a className="secondary-action" href={ENQUIRY_URL}>Make an enquiry <span aria-hidden="true">→</span></a> : <span className="secondary-action is-disabled" aria-disabled="true">Make an enquiry <span aria-hidden="true">→</span></span>}
            </div>
            <p className="cta-note">Application and enquiry destinations will appear when official URLs are confirmed.</p>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div>
          <p className="wordmark">DIT <span>//</span> JTMK.PUO</p>
          <p className="footer-copy">Department of Information and Communication Technology<br />Politeknik Ungku Omar · Ipoh, Perak, Malaysia</p>
        </div>
        <div className="footer-meta">
          <span>PROGRAMME // DIT</span>
          <span>TRACKS // 03</span>
          <span>SYSTEM // ONLINE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
