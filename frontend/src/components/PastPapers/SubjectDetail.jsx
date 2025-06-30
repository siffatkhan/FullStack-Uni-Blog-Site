// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SubjectDetails = () => {
//   const { subjectId } = useParams(); // instead of slug
// console.log(subjectId);

//   const [subject, setSubject] = useState({
//     title: "Applied Physics (AP)",
//     saves: 99,
//   });

//   // Dummy papers data for layout testing
//   const [papers, setPapers] = useState([
//     {
//       id: 1,
//       category: "Past Paper",
//       title: "2020 Final Solution - AP",
//       url: "https://drive.google.com/file/d/xyz/view?usp=drive_link",
//     },
//     {
//       id: 2,
//       category: "Quiz",
//       title: "Quiz 1 Solution - AP",
//       url: "https://drive.google.com/file/d/abc/view?usp=drive_link",
//     },
//     {
//       id: 3,
//       category: "Assignment",
//       title: "Assignment 1 - AP",
//       url: "https://drive.google.com/file/d/def/view?usp=drive_link",
//     },
//     {
//       id: 4,
//       category: "Book",
//       title: "Fundamentals of Physics - AP",
//       url: "https://drive.google.com/file/d/ghi/view?usp=drive_link",
//     },
//     {
//       id: 5,
//       category: "Other",
//       title: "Lab Manual - AP",
//       url: "https://drive.google.com/file/d/jkl/view?usp=drive_link",
//     },
//   ]);

//   /*
//   useEffect(() => {
//     const fetchSubjectDetails = async () => {
//       try {
//         // Fetch subject by slug
//         const res1 = await fetch(`/api/subjects/${slug}`);
//         const data1 = await res1.json();
//         setSubject(data1);

//         // Fetch papers for this subject
//         const res2 = await fetch(`/api/papers/${slug}`);
//         const data2 = await res2.json();
//         setPapers(data2);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchSubjectDetails();
//   }, [slug]);
//   */

//   if (!subject) return <p>Loading...</p>;

//   const getPapersByCategory = (category) =>
//     papers.filter((p) => p.category === category);

//   return (
//     <div className="cont">
//       <h2>{subject.title}</h2>

//       {/* Past Papers */}
//       <div className="contcont">
//         <h3>Past Papers</h3>
//         <ol className="timeline">
//           <div className="contentlinkers" id="display-past_papers">
//             {getPapersByCategory("Past Paper").length === 0 ? (
//               <p className="nolink">No links in Past Papers</p>
//             ) : (
//               getPapersByCategory("Past Paper").map((paper) => (
//                 <li className="timeline-item" key={paper.id}>
//                   <span className="timeline-item-icon | faded-icon">
//                     <i className="fa-solid fa-link" aria-hidden="true"></i>
//                   </span>
//                   <div className="timeline-item-description">
//                     <i className="avatar | small">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
//                         alt="Drive"
//                       />
//                     </i>
//                     <span>
//                       <a target="_blank" rel="noopener noreferrer" href={paper.url}>
//                         {paper.title}
//                       </a>
//                     </span>
//                   </div>
//                 </li>
//               ))
//             )}
//           </div>
//         </ol>
//       </div>

//       {/* Quizzes */}
//       <div className="contcont">
//         <h3>Quizzes</h3>
//         <ol className="timeline">
//           <div className="contentlinkers" id="display-quizzes">
//             {getPapersByCategory("Quiz").length === 0 ? (
//               <p className="nolink">No links in Quizzes</p>
//             ) : (
//               getPapersByCategory("Quiz").map((paper) => (
//                 <li className="timeline-item" key={paper.id}>
//                   <span className="timeline-item-icon | faded-icon">
//                     <i className="fa-solid fa-link" aria-hidden="true"></i>
//                   </span>
//                   <div className="timeline-item-description">
//                     <i className="avatar | small">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
//                         alt="Drive"
//                       />
//                     </i>
//                     <span>
//                       <a target="_blank" rel="noopener noreferrer" href={paper.url}>
//                         {paper.title}
//                       </a>
//                     </span>
//                   </div>
//                 </li>
//               ))
//             )}
//           </div>
//         </ol>
//       </div>

//       {/* Assignments */}
//       <div className="contcont">
//         <h3>Assignments</h3>
//         <ol className="timeline">
//           <div className="contentlinkers" id="display-assignments">
//             {getPapersByCategory("Assignment").length === 0 ? (
//               <p className="nolink">No links in Assignments</p>
//             ) : (
//               getPapersByCategory("Assignment").map((paper) => (
//                 <li className="timeline-item" key={paper.id}>
//                   <span className="timeline-item-icon | faded-icon">
//                     <i className="fa-solid fa-link" aria-hidden="true"></i>
//                   </span>
//                   <div className="timeline-item-description">
//                     <i className="avatar | small">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
//                         alt="Drive"
//                       />
//                     </i>
//                     <span>
//                       <a target="_blank" rel="noopener noreferrer" href={paper.url}>
//                         {paper.title}
//                       </a>
//                     </span>
//                   </div>
//                 </li>
//               ))
//             )}
//           </div>
//         </ol>
//       </div>

//       {/* Books */}
//       <div className="contcont">
//         <h3>Books</h3>
//         <ol className="timeline">
//           <div className="contentlinkers" id="display-books">
//             {getPapersByCategory("Book").length === 0 ? (
//               <p className="nolink">No links in Books</p>
//             ) : (
//               getPapersByCategory("Book").map((paper) => (
//                 <li className="timeline-item" key={paper.id}>
//                   <span className="timeline-item-icon | faded-icon">
//                     <i className="fa-solid fa-link" aria-hidden="true"></i>
//                   </span>
//                   <div className="timeline-item-description">
//                     <i className="avatar | small">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
//                         alt="Drive"
//                       />
//                     </i>
//                     <span>
//                       <a target="_blank" rel="noopener noreferrer" href={paper.url}>
//                         {paper.title}
//                       </a>
//                     </span>
//                   </div>
//                 </li>
//               ))
//             )}
//           </div>
//         </ol>
//       </div>

//       {/* Others */}
//       <div className="contcont">
//         <h3>Others</h3>
//         <ol className="timeline">
//           <div className="contentlinkers" id="display-others">
//             {getPapersByCategory("Other").length === 0 ? (
//               <p className="nolink">No links in Others</p>
//             ) : (
//               getPapersByCategory("Other").map((paper) => (
//                 <li className="timeline-item" key={paper.id}>
//                   <span className="timeline-item-icon | faded-icon">
//                     <i className="fa-solid fa-link" aria-hidden="true"></i>
//                   </span>
//                   <div className="timeline-item-description">
//                     <i className="avatar | small">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
//                         alt="Drive"
//                       />
//                     </i>
//                     <span>
//                       <a target="_blank" rel="noopener noreferrer" href={paper.url}>
//                         {paper.title}
//                       </a>
//                     </span>
//                   </div>
//                 </li>
//               ))
//             )}
//           </div>
//         </ol>
//       </div>

//       {/* Not Enough */}
//       <div className="contcont">
//         <h3>Not Enough?</h3>
//         <div className="contentlinkers">
//           <p>
//             If you have material for this subject that isn't here, please email the document with its details to
//             <strong> wondarlms@gmail.com</strong> to list it here. Thank You!
//           </p>
//           <a href="https://www.instagram.com/wondar.site/">
//             <button className="button">Instagram</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubjectDetails;

// ==================================================
// FOR TESTING PURPOSES
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
			{/* <div className="contcont">
				<h3>Course Outline</h3>
				<ol className="timeline">
					<div className="contentlinkers">{emptyMessage('Course Outline')}</div>
				</ol>
			</div> */}

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

			{/* <div className="contcont">
				<h3>Lab Tasks</h3>
				<ol className="timeline">
					<div className="contentlinkers">{emptyMessage('Lab Tasks')}</div>
				</ol>
			</div> */}

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
