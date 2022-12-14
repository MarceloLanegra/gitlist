import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { getRepos, getUser } from './services/users';
import {useParams} from 'react-router-dom'
import Modal from './components/Modal';

function App() {
  const params = useParams()
  let username = params.user
  if(!username)
  {
    username='marcelolanegra'
  }
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])
  const [modal,setModal] = useState(false)
  const [search,setSearch] = useState('')
  const [filterLanguage,setFilterLanguage] = useState('')
  const [filterSort, setFilterSort] = useState("");
  useEffect(()=>{
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado a este usurio");
        return;
      }
      setUser(data);
    })
    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado los repositorios");
        return;
      }
      setRepos(data);
    });
  },[username])
  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters
        setFilterLanguage={setFilterLanguage}
        setFilterSort={setFilterSort}
        setSearch={setSearch}
        repoListCount={repos.length}
      />
      <RepoList
        filterLanguage={filterLanguage}
        filterSort={filterSort}
        search={search}
        repoList={repos}
      />
      <Search setModal={setModal} />
    </Layout>
  );
}

export default App;
