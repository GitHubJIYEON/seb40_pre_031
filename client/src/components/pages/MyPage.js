/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { myApi } from '../../api/apis';
import { useSelector, useDispatch } from 'react-redux';

import Avartar from '../atoms/Avartar';
import MyEditCard from '../atoms/MyEditCard';
import LeftNav from '../organism/LeftNav';

const MyPage = () => {
  const { userId } = useSelector((state) => ({
    userId: state.authReducer.userId,
  }));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    myApi
      .getUser(10)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MyPageLayout>
      <LeftNav></LeftNav>
      <div className="my">
        <div className="name">
          <Avartar color={users.avatarColor} />
          <h1>{users.displayName}</h1>
        </div>
        <MyEditCard />
      </div>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  display: flex;

  .my {
    margin: 12px;

    .name {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      h1 {
        margin-left: 15px;
      }
    }
  }
`;
