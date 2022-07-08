import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:list-child) {
      margin-bottom: 16px;
    }
  }
`;

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((el) => {
        return <CommentListItem key={el.id} comment={el} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
