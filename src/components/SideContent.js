import React from 'react';
import profilePic from '../images/profile-picture.jpg';

const SideContent = () => (
  <aside className="col-sm-3 about-me about-side text-center">
    <img src={profilePic} alt="Frederick Morin" width={200} className="profile-pic img-responsive center-block" />
    <h1>Frédérick Morin</h1>
    <h2>Front-End Developer</h2>

    <div style={{ margin: '20px' }} className="text-center">
      <a href="https://github.com/freddydumont" title="GitHub Page" className="icon-contact"><i className="fa fa-github"></i></a>
      <a href="mailto:frederickmorin18@gmail.com" title="Email link" className="icon-contact"><i className="fa fa-envelope"></i></a>
    </div>
  </aside>
);

export default SideContent;