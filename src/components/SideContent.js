import React from 'react';
import profilePic from '../images/profile-picture.jpg';

const SideContent = () => (
  <div>
    <img src={profilePic} alt="Frederick Morin" width={200} className="profile-pic img-responsive center-block" />
    <h1>Frédérick Morin</h1>
    <h2>Front-End Developer</h2>

    <div style={{ margin: '20px' }} className="text-center">
      <a href="https://github.com/freddydumont" title="GitHub Page" className="icon-contact"><i className="fa fa-github"></i></a>
      <a href="https://twitter.com/_freddydumont" title="Twitter Page" className="icon-contact"><i className="fa fa-twitter"></i></a>
      <a href="https://linkedin.com/in/freddydumont" title="LinkedIn Page" className="icon-contact"><i className="fa fa-linkedin-square"></i></a>
      <a href="https://medium.com/@freddydumont" title="Medium Page" className="icon-contact"><i className="fa fa-medium"></i></a>
      <a href="https://www.recursivewandering.com" title="Blog" className="icon-contact"><i className="fa fa-globe"></i></a>
      <a href="mailto:frederickmorin18@gmail.com" title="Email link" className="icon-contact"><i className="fa fa-envelope"></i></a>
    </div>
  </div>
);

export default SideContent;