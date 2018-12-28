import styled from 'styled-components';

export default (Component) => styled(Component)`
p {
    color: #ffffff;
    padding: 4px 10px 4px 10px;
    margin-top: 7px;
  }
  
  table {
    width: 100%;
    margin: 30px auto 0px auto;
    table-layout: fixed;
  }
  .tbl-header {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .tbl-content {
    height: auto;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: rgb(8, 8, 8);
    text-transform: uppercase;
  }
  td {
    padding: 15px; 
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: rgb(19, 15, 15);
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  }
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  .btn {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    float: right;
  }
  #gal-img {
    width: 100%;
    display: block;
    height: 250px;
  }
  
  .app {
    max-width: 1000px;
    margin: auto;
  }
  .section-title {
    text-transform: uppercase;
    color: gold;
    border-bottom: 1px solid #222;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  .left {
    width: 50%;
    float: left;
  }
  .right {
    width: 50%;
    float: right;
  }
  .img{
    width: 100%;
  }
  @media (min-width: 500px) {
    .img {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 500px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
  }
  @media (min-width: 800px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .grid-group {
    margin-bottom: 3rem;
  }
  
  @media (min-width: 500px) {
    .grid-group {
      margin-bottom: 0;
    }
  }
  .grid-group-meta {
    margin: 2rem 0;
  }
  
  .grid-group-meta h3,
  .grid-group-meta h4 {
    margin: 0;
  }
  .grid-group-meta h3 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .grid-group-meta h4 {
    font-style: italic;
  }
  
  .grid-group-text p {
    line-height: 1.5;
    text-align: justify;
  }
  .transparent {
    background-color: white;
    border: none;
  }
  .pagination {
    display: inline-block;
  }
  
  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
  }
  
  .pagination a.active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }
  
  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
  .topnav {
    overflow: hidden;
    margin: 0px auto 0px auto;
    padding: 0px 20px 0px 20px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #014464;
    background: -moz-linear-gradient(top, #0272a7, #013953);
    background: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      from(#0272a7),
      to(#013953)
    );
  }
  
  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: transparent;
    color: white;
  }
  
  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
    
`;
