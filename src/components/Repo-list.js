import styled from 'styled-components'
import RepoItem from './Repo-item'
import EmptyRepos from './EmptyRepos'

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  
`

function RepoList({repoList, search, filterLanguage, filterSort}) {
  let list = repoList
  
  if (search !== ''){
    list = list.filter((item)=>{
      return item.name.search(search) >= 0
    })
    if (list.length === 0){
      return <EmptyRepos/>
    }
  }
 
  if (filterLanguage !== "" && filterLanguage !== "all") {
    list = list.filter((item) => {
      if (item.language) {
        return item.language.toLowerCase() === filterLanguage.toLowerCase();
      }
    });
  }

  // if (filterSort === "last-updated") {
  //   return list = list.sort((a,b)=> {
  //     return (
  //       new Date(a.updated_at).getTime() -
  //       new Date(b.updated_at).getTime()
  //     );
  //   })
  //   // console.log('Last');
    
  // }

  return (
    <RepoListStyled>
      {list.map((item)=>{
        return <RepoItem {...item} key={item.id}/>
      })}
    </RepoListStyled>
  )
}

export default RepoList
