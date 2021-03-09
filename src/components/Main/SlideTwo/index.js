import React from 'react';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import todolist from './todolist.mp4';
import todolistPic from './todo.png';
import amanger from './amanger.png';

const SlideTwo = ({
  handleVideoLauncher, toggleClassName, toggle, projects,
}) => {
  const launchVideoOnClick = () => {
    let active = '';
    if (toggleClassName === 'container__video') {
      active = 'container__video active';
    }
    else if (toggleClassName === 'container__video active') {
      active = 'container__video';
    }
    handleVideoLauncher(active);
  };

  return (
    <div id="second__slide">
      {projects.map((project) => {
        console.log(project.picture);
        return(
        <div className="hexagon" key={project.id}>
          <div className="shape front">
            <img className="projects__picture" src={project.picture} alt="todolist project" />
          </div>
          <div className="shape back">
            <div className="hexagon__content">
              <h2>{project.title}</h2>
              <div className="hexagon__text">
                <p>{project.description}</p>
                <p>{project.stackFront}</p>
                <p>{project.stackBack}</p>
              </div>
              <p>Apperçu du projet   <FontAwesomeIcon icon={faPlay} onClick={launchVideoOnClick} /></p>
            </div>
          </div>
        </div>
      )})}
      {!toggle && (
        <div className={toggleClassName}>
          <video className="video__projects" src={todolist} type="video/mp4" autoPlay controls>
            <track default kind="captions" />
          </video>
          <img className="close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8jHyAfGxwAAADd3N0IAAAMAAUgHB3f39/T0tMQCArS0dLMy8zV1NURCQy6ublvpm1HAAAFUUlEQVR4nO2djYKiMAyEVWA5TtH3f9uz4O7yT5KmTZrLPECb8ctmVoRyubhcLpfL5XK5XC6Xy+X6f/TopSvYUP/gW6urmppvNSbVTdVxrdVX7a3SZrGubm3F1Fpd1V6vN2UU6+Z2vbY8FAeD2iwOBpks3keDb4uKGvXdomNRbXWPXav7Nvi2+KXFYv11+y4qmuLEoB6KPwQZLPZTg1ooTgiOFiMmajc3qIPijGAkxZVBDRQXBKMs9muD8hRXBCMadYPgYFE0Fz85yEJxx6CsxR2DJIv3PYOSjbrZot8WkdG/S3CwKDRuNoYMmeKhQSmKBwTRFjenqDTFQ4KjRfBEPSEoQ/GEIIri49xgfoqnBEeLsAsb/d5IFqQIIDh87MA+BS6XMRd3c3BR0R/uBXNZBNbzBTYIXjJTo0JbFGEQvmgOi6Ahg2lR1LIZKAI/7L9Ig3ooQj9qtEEtFJMRRCyelGJCgpjl01lMShCxQbJcZA96+hZpLCYIevImSRo1SdDTt+G3mCjoyRuxU0w+ZNBbMVNMHBO0zTgtZiSI2I6RYlaCmA25LGYmiNiSKRczBD19Uw6LWYKevC1Do2YKevrGsRazBT1560iKAkMGvXkUxewxQdueblGUIKIAMkVhgpgSaBbFCSKKIOWiSNDTy8BbFAp6ciHoRhULenopOIuCQU8uBkVRxZBBl4OgqCAmaAVBLSojiCgJSFEdQUxREIsKCSLKAuSikqCnF3ZmUU3Qk0s7aVRFQU8v7siiqqAnl3dAUemQQRe4S1FlTNBK3LaoniCiyE2KBRDElLm2WARBRKGrXFQb9GvRol9x0K9FiX7VQb8WftwoD/q1sOOmmCHzKxzFQmJiLgzFAgkGwSkWSTAIWPjz9SySYBCMYtsAHubQNEWnguUiRGpycCkui2oNQhv11KDOFh0FGzcnBjUOmV/FU1QYE3PFUlROMCiOonqCQTEUCyAYRKeoeopORc1FxTm4FM1iQQZpjVpMi47Cj5tChsyvsBSLiIm5cBSLIxiEoVggwSA4xSIJBtVPyPf59/f+Z6EGL5dXA3LYvKQLpco8Q/N/h+Znqfk8NP8/jfn/S0nfLUqiaP77If07vvSxk0BFXKcpo1HNX2szf73U/DVv879bmP/tien3Q70Uzf8GzPk7vsroZ70XQ2Ojmr+fxvw9UebvazN/b6L5+0uT3SOshaL5+7zT3quvIPoTP28h36jmn5kx/9yT+WfXzD9/aP4Z0ozPActQNP8sd+7n8bNHf/YzFXI3qvlzMcyfbWL+fBrzZwyZPydK9KyvHBTNn9cmf+Ze4uhXcG5i2kY1f/al+fNLzZ9Ba/4cYfNnQSs7z5ufovkz2TWeq88a/SrfjcDZqObfb2H+HSXm3zNj/l1B5t/3pP6dXbEUzb93rYx350XsXsj7D+mNav4dlubfQypPcKgiHUUNBIc6UlHUQXCoJA1FLQSHWlJQNP9uddmgJ9cD7yjpoN+oiDf6e1UtOgraqD1otUcFeCQi9+0foHHTVg/Yat25xbwEgwAU26qDrtafWZS4d/eUYlvBenTQCcX8BINOKCIIBh1alLr7+pAi0uDlct+3KEMw6IBiW92xq+1SzJmDS+3mIppg0I5FSYO7FkkGdyaqXIuO2mxU1BSdaoOi/CMeG+OGSDBoZVGaYNCKYoTBVaPKEwxaUCS36KgZRQ0Eg2YUowgGTSzqIBg0oRhtcBL9WggG/VAkBP1aH4qyObjUJxcZCAYNFnUZ/FhkMjhMVE0tOurdqJFTdKquUkYwqG64CAY92D4sRvXASxYul8vlcrlcLpfL5XK5TOgfOTVNnOsk4KoAAAAASUVORK5CYII=" alt="cross" onClick={launchVideoOnClick} />
        </div>
      )}
    </div>
  );
};
export default SlideTwo;
