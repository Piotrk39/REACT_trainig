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
              <GitHubIcon sx={{ color: "#f5ba13" }}></GitHubIcon> <LinkedInIcon sx={{ color: "#f5ba13" }}></LinkedInIcon> <EmailIcon sx={{ color: "#f5ba13" }}></EmailIcon>
             </p>}
        </header>
    );
};

export default Header;