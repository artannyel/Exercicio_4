import React from 'react';
import './List.css';

const List = (props) => {

  const { data } = props;

  return (
    <div className="List">
      {data?.map((item, index) => (
        <div className="Item" key={index}>
          <p>👤 {item.author}</p>
          <h3>📖 {item.title}</h3>
          <p>🔗<a href={item.url} target='_blank' rel="noreferrer"> {item.url}</a></p>
        </div>
      ))}
    </div>
  );
}

export default List;
