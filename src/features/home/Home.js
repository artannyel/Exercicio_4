import './Home.css';

import React, { useEffect, useState } from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import List from '../../components/list'
import Input from '../../components/input'
import api from '../../_config/api';
import Button from '../../components/button';

const Home = (props) => {

  const [sectionData, setSectionData] = useState(props.sectionData);
  
  const [query, setQuery] = useState("");

  const { title, footer_desc } = props;

  const sectionClassSearch = 'SectionSearch';

  const sectionClassData = 'SectionData';

  const inputLabel = 'Barra de pesquisa:';

  const onChangeQuery = (value) => {
    setQuery(value);
  }

  const fetchData = async () => {
    const response = await api.get('v1/search?query=' + query)
    setSectionData(response?.data.hits);
  }

  useEffect(
    () => {
      fetchData();
    },
    []
  );

  return (
    <div className="Home">
      <Header title={title}></Header>
      <Section className={sectionClassSearch}>
        <Input label={inputLabel} callback={onChangeQuery} />
        <Button callback={fetchData} />
      </Section>
      <Section className={sectionClassData}> <List data={sectionData} /> </Section>
      <Footer description={footer_desc}></Footer>
    </div>
  );

};

export default Home;
