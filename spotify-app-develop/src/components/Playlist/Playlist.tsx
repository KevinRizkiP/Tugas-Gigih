import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";

interface IProrps {
  name: string;
}

const Playlists: React.FC<IProrps> = ({ name }) => {
  const accessToken: string = useAppSelector((state) => state.auth.accessToken);
  const userId: string | undefined = useAppSelector(
    (state) => state.auth.user?.id
  );
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Playlists;
