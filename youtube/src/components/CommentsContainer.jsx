import React from 'react';
import Avatar from '@mui/material/Avatar';
const commentsData = [
  {
    name: 'Sai',
    comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
    replies: [
      {
        name: 'Sai',
        comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
        replies: [
          {
            name: 'Sai',
            comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
            replies: [
              {
                name: 'Sai',
                comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
                replies: [
                  {
                    name: 'Sai',
                    comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
                    replies: [
                      {
                        name: 'Sai',
                        comment:
                          'lorem ipusum of lorem ipusm of lorem ipsum of',
                        replies: [
                          {
                            name: 'Sai',
                            comment:
                              'lorem ipusum of lorem ipusm of lorem ipsum of',
                            replies: [],
                          },
                          {
                            name: 'Sai',
                            comment:
                              'lorem ipusum of lorem ipusm of lorem ipsum of',
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'Sai',
                    comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Sai',
            comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
            replies: [],
          },
        ],
      },
      {
        name: 'Sai',
        comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
        replies: [
          {
            name: 'Sai',
            comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
            replies: [],
          },
          {
            name: 'Sai',
            comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
            replies: [],
          },
        ],
      },
      {
        name: 'Sai',
        comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
        replies: [
          {
            name: 'Sai',
            comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
            replies: [],
          },
          {
            name: 'Sai',
            comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
            replies: [],
          },
        ],
      },
    ],
  },
  //   {
  //     name: 'Sai',
  //     comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
  //     replies: [],
  //   },
  //   {
  //     name: 'Sai',
  //     comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
  //     replies: [],
  //   },
  //   {
  //     name: 'Sai',
  //     comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
  //     replies: [],
  //   },
  //   {
  //     name: 'Sai',
  //     comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
  //     replies: [],
  //   },
  //   {
  //     name: 'Sai',
  //     comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
  //     replies: [],
  //   },
  //   {
  //     name: 'Sai',
  //     comment: 'lorem ipusum of lorem ipusm of lorem ipsum of',
  //     replies: [],
  //   },
];
const CommentData = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-200 my-2">
      <div>
        <Avatar />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{comment}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  if (!comments?.length) {
    return <></>;
  }
  return comments.map((comment, ind) => (
    <div>
      <CommentData key={ind} data={comment} />
      <div className="pl-5 border-l border-l-black ml-5">
        <CommentList key={ind} comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-4 p-2 w-full">
      <div className="font-bold">
        <h4>Comments :</h4>
      </div>
      <CommentList comments={commentsData} />
      {/* {commentsData.map((data) => (
        <CommentData data={data} />
      ))} */}
    </div>
  );
};

export default CommentsContainer;
