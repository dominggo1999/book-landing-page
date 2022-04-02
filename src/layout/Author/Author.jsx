import React from 'react';
import { AuthorWrapper } from './Author.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import AuthorInfo from '../../common/AuthorInfo/AuthorInfo';
import { authorsDetails } from '../../data/authorsDetails';

const Author = () => {
  return (
    <AuthorWrapper id="author">
      <SectionHeader
        subtitle="Author and Illustrator"
        title=" Quisque maximus vitae sem id ullamcorper"
      />
      {authorsDetails?.length > 0 && authorsDetails.map((item, id) => {
        const reversed = id % 2 !== 0;

        return (
          <AuthorInfo
            reversed={reversed}
            details={item}
            key={`author${item.name}`}
          />
        );
      })}
    </AuthorWrapper>
  );
};

export default Author;
