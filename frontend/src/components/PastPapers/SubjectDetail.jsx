

import React from 'react';

const SubjectDetail = () => {
	const driveIcon =
		'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png';

	const pastPapers = [
		{
			title: '2021 - Sessional 1 - Fall - A&F',
			link: 'https://drive.google.com/file/d/1Tvics_qPW5istYmwaWJYG1Wan1Q8HfMw/view?usp=drive_link',
		},
		{
			title: '2021 - Sessional 2 - Fall - A&F',
			link: 'https://drive.google.com/file/d/1HHmRYBlEGws855OUT-5G0ppen6mytQN8/view?usp=drive_link',
		},
		{
			title: '2022 - Sessional 1 - Spring - A&F',
			link: 'https://drive.google.com/file/d/1AOWOfHPU8pxVJXt0fRemjqvGJCRQsnUT/view?usp=drive_link',
		},
	];

	const quizzes = [
		{
			title: '2012 - Quiz 7 - Spring - A&F',
			link: 'https://drive.google.com/file/d/1DULBTOsDWQlAoRvxQrHYoJj7ZZUjnzC-/view?usp=drive_link',
		},
		{
			title: '2012 - Quiz 7 Answer Solution - Spring - A&F',
			link: 'https://drive.google.com/file/d/1iR1ppYU1fLHmpAzxk75C2ldd_jVb4xr6/view?usp=drive_link',
		},
	];

	const emptyMessage = (name) => <p className="nolink">No links in {name}</p>;

	const renderList = (items) =>
		items.map((item, index) => (
			<li className="timeline-item" key={index}>
				<span className="timeline-item-icon faded-icon">
					<i className="fa-solid fa-link" aria-hidden="true"></i>
				</span>
				<div className="timeline-item-description">
					<i className="avatar small">
						<img
							src={driveIcon}
							alt="Google Drive"
							style={{ width: '20px', height: '20px', display: 'inline-block' }}
						/>
					</i>
					<span>
						<a target="_blank" rel="noreferrer" href={item.link}>
							{item.title}
						</a>
					</span>
				</div>
			</li>
		));

	return (
		<div className="cont">

			<div className="contcont">
				<h3>Past Papers</h3>
				<ol className="timeline">
					<div className="contentlinkers">
						{pastPapers.length > 0
							? renderList(pastPapers)
							: emptyMessage('Past Papers')}
					</div>
				</ol>
			</div>

			<div className="contcont">
				<h3>Quizzes</h3>
				<ol className="timeline">
					<div className="contentlinkers">
						{quizzes.length > 0 ? renderList(quizzes) : emptyMessage('Quizzes')}
					</div>
				</ol>
			</div>

			<div className="contcont">
				<h3>Assignments</h3>
				<ol className="timeline">
					<div className="contentlinkers">{emptyMessage('Assignments')}</div>
				</ol>
			</div>

			<div className="contcont">
				<h3>Books</h3>
				<ol className="timeline">
					<div className="contentlinkers">{emptyMessage('Books')}</div>
				</ol>
			</div>

		

			<div className="contcont">
				<h3>Others</h3>
				<ol className="timeline">
					<div className="contentlinkers">{emptyMessage('Others')}</div>
				</ol>
			</div>

			<div className="contcont">
				<h3>Help Us To Help Others !!!</h3>
				<div className="contentlinkers">
					<p>
						If you or any of your friends have material related to this subject that is not here, please email us
						the document along with its details to
						<strong> imspectrum@gmail.com </strong>
						for publishing it here. Thank You!
					</p>
					<a
						href="https://www.instagram.com/wondar.site/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="button">Instagram</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SubjectDetail;


// ==================================================
// FOR TESTING PURPOSES with better chances of sucess
// and check the notes for optimizing it 

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SubjectDetail = () => {
//   const { slug } = useParams();
//   const [subject, setSubject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const driveIcon = "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png";

//   useEffect(() => {
//     const fetchSubjectData = async () => {
//       try {
//         const res = await fetch(`https://api.example.com/subjects/${slug}`);
//         if (!res.ok) throw new Error("Failed to fetch data");
//         const data = await res.json();
//         setSubject(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubjectData();
//   }, [slug]);

//   const emptyMessage = (name) => <p className="nolink">No links in {name}</p>;

//   const renderList = (items) =>
//     items.map((item, index) => (
//       <li className="timeline-item" key={index}>
//         <span className="timeline-item-icon faded-icon">
//           <i className="fa-solid fa-link" aria-hidden="true"></i>
//         </span>
//         <div className="timeline-item-description">
//           <i className="avatar small">
//             <img
//               src={driveIcon}
//               alt="Google Drive"
//               style={{ width: "20px", height: "20px", display: "inline-block" }}
//             />
//           </i>
//           <span>
//             <a target="_blank" rel="noreferrer" href={item.link}>
//               {item.title}
//             </a>
//           </span>
//         </div>
//       </li>
//     ));

//   return (
//     <div className="cont">
//       <h2>{slug.replaceAll("-", " ").toUpperCase()}</h2>

//       {loading && <p>Loading subject data...</p>}

//       {error && <p>Error: {error}</p>}

//       {/* Even if error or loading, show all sections with emptyMessage */}

//       <div className="contcont">
//         <h3>Past Papers</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject && subject.pastPapers && subject.pastPapers.length > 0
//               ? renderList(subject.pastPapers)
//               : emptyMessage("Past Papers")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Quizzes</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject && subject.quizzes && subject.quizzes.length > 0
//               ? renderList(subject.quizzes)
//               : emptyMessage("Quizzes")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Assignments</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject && subject.assignments && subject.assignments.length > 0
//               ? renderList(subject.assignments)
//               : emptyMessage("Assignments")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Books</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject && subject.books && subject.books.length > 0
//               ? renderList(subject.books)
//               : emptyMessage("Books")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Others</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject && subject.others && subject.others.length > 0
//               ? renderList(subject.others)
//               : emptyMessage("Others")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Help Us To Help Others !!!</h3>
//         <div className="contentlinkers">
//           <p>
//             If you or any of your friends have material related to this subject that is not here, please email us
//             the document along with its details to
//             <strong> imspectrum@gmail.com </strong>
//             for publishing it here. Thank You!
//           </p>
//           <a href="https://www.instagram.com/wondar.site/" target="_blank" rel="noreferrer">
//             <button className="button">Instagram</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubjectDetail;



// =============================================
// JUST LAYOUT CODE IN ORDER TO CHECK FOR BACKEND LOGIC CHECK SECOND CODE

// import React from "react";
// import { useParams } from "react-router-dom";

// const SubjectDetail = () => {
//   const { slug } = useParams();

//   const driveIcon = "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png";

//   // Dummy sample data
//   const subject = {
//     pastPapers: [],
//     quizzes: [],
//     assignments: [],
//     books: [],
//     others: []
//   };

//   const emptyMessage = (name) => <p className="nolink">No links in {name}</p>;

//   const renderList = (items) =>
//     items.map((item, index) => (
//       <li className="timeline-item" key={index}>
//         <span className="timeline-item-icon faded-icon">
//           <i className="fa-solid fa-link" aria-hidden="true"></i>
//         </span>
//         <div className="timeline-item-description">
//           <i className="avatar small">
//             <img
//               src={driveIcon}
//               alt="Google Drive"
//               style={{ width: "20px", height: "20px", display: "inline-block" }}
//             />
//           </i>
//           <span>
//             <a target="_blank" rel="noreferrer" href={item.link}>
//               {item.title}
//             </a>
//           </span>
//         </div>
//       </li>
//     ));

//   return (
//     <div className="cont">
//       <h2>{slug.replaceAll("-", " ").toUpperCase()}</h2>

//       <div className="contcont">
//         <h3>Past Papers</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject.pastPapers.length > 0
//               ? renderList(subject.pastPapers)
//               : emptyMessage("Past Papers")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Quizzes</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject.quizzes.length > 0
//               ? renderList(subject.quizzes)
//               : emptyMessage("Quizzes")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Assignments</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject.assignments.length > 0
//               ? renderList(subject.assignments)
//               : emptyMessage("Assignments")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Books</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject.books.length > 0
//               ? renderList(subject.books)
//               : emptyMessage("Books")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Others</h3>
//         <ol className="timeline">
//           <div className="contentlinkers">
//             {subject.others.length > 0
//               ? renderList(subject.others)
//               : emptyMessage("Others")}
//           </div>
//         </ol>
//       </div>

//       <div className="contcont">
//         <h3>Help Us To Help Others !!!</h3>
//         <div className="contentlinkers">
//           <p>
//             If you or any of your friends have material related to this subject that is not here, please email us
//             the document along with its details to
//             <strong> imspectrum@gmail.com </strong>
//             for publishing it here. Thank You!
//           </p>
//           <a href="https://www.instagram.com/wondar.site/" target="_blank" rel="noreferrer">
//             <button className="button">Instagram</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubjectDetail;


