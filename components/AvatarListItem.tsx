"use client";
import type { FC } from "react";

const mockAvatar =
  'https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg?ct=jpeg"';

interface AvatarListItemProps {}

const AvatarListItem: FC<AvatarListItemProps> = () => {
  return (
    <>
      <div className="flex items-center pt-3 justify-between">
        <div className="flex">
          <img
            className="w-7 h-7 rounded-full"
            src={mockAvatar}
            alt="Rounded avatar"
          />
          <div className="pl-2">
            <p className="text-xs">John Doe</p>
            <p className="text-xs text-gray-500">johnDoe@email.com</p>
          </div>
        </div>
        <p className=" justify-self-end text-orange-600 font-medium">$320</p>
      </div>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-200" />
    </>
  );
};

export default AvatarListItem;
