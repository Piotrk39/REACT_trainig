import React, {useState} from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Header() {
    const [expand, setExpand] = useState(false)

    const handleZoom = () => {
        setExpand(true);
    }
    const handleZoomOut = () => {
        setExpand(false);
    }

    const handlePageChangeGitHub = () => {
       window.open("https://github.com/Piotrk39", "_blank");
    }

    const handlePageChangeLinkedIn = () => {
        window.open("https://www.linkedin.com/in/piotrk39/", "_blank");
    }

    const handleEmail = () => {
        window.open('mailto:piotrk39@gmail.com?subject=Subject&body=Body%20goes%20here');
    }

    return (
        <header>
            <h1><HighlightIcon />Keeper</h1>
            <button
             onMouseEnter={handleZoom}
             onMouseLeave={handleZoomOut}
             className="about-button"
            >
             About
            </button>
            {expand && 
             
             <p
              className="paragraph" 
              onMouseEnter={handleZoom}
              onMouseLeave={handleZoomOut}>
              My name is Piotr Krajewski I'am QA Engeenier and a Full Stack JavaScript Developer<br></br>
              <GitHubIcon className="icon" sx={{ color: "#f5ba13" }} onClick={handlePageChangeGitHub}></GitHubIcon> 
              <LinkedInIcon className="icon" sx={{ color: "#f5ba13" }} onClick={handlePageChangeLinkedIn}></LinkedInIcon> 
              <EmailIcon className="icon" sx={{ color: "#f5ba13" }} onClick={handleEmail}></EmailIcon>
             </p>}
        </header>
    );
};

export default Header;




// Create dataBase for the notes to be kept
// Deploy
