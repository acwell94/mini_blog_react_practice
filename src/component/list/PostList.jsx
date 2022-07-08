import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

function PostList(props) {
  const { posts, onClickItem } = props;
  return (
    <Wrapper>
      {posts.map((el, idx) => {
        return (
          <PostListItem
            key={el.id}
            post={el}
            onClick={() => {
              onClickItem(el);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default PostList;
