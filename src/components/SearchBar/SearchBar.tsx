import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SearchContainer, StyledInput, StyledButton } from '~/styles/style';

export const SearchBar = ({onSubmit, isLoading}: {onSubmit: (string: string) => void, isLoading: boolean}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm) {
      message.warning('Please enter an ISRC to search');
      return;
    }
    onSubmit(searchTerm)
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>

      <StyledInput
        placeholder="Enter ISRC"
        prefix={<SearchOutlined/>}
        size="large"
        value={searchTerm}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
        autoComplete='on'
      />
      <StyledButton type="primary" size="large" onClick={handleSearch} icon={<SearchOutlined/>} loading={isLoading}>
        Search
      </StyledButton>
    </SearchContainer>
  );
}
