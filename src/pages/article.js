const articlePage = (props) => {
  const template = `
  <h3>${props.params.id}번 상세페이지 입니다.</h3>
  `;

  return template;
};

export default articlePage;
