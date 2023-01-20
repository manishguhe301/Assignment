import { InputBase,Box ,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchBox = styled(Box)`
  background: #fff;
  width: 38%;
  margin-left: 10px;
  display: flex;
  height: 36px;
`
const InputBox = styled(InputBase)`
width: 100%;
padding-left: 20px;
`;

const Wrapper = styled(Box)`
  color: #2874f0;
  padding: 5px;
`
const Search = () => {
  return (
    <SearchBox>
      <InputBox placeholder='Search for products,brands and more' />
      <Wrapper>
        <SearchIcon />
      </Wrapper>
    </SearchBox>
  )
}

export default Search