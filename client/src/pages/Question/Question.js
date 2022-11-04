import React from 'react';
import FakeData from '~/FakeData';
import { CommentContainer } from '~/layout/components/Comment';
import CommentRoot from '~/layout/components/Comment/CommentRoot';
import QuestionDetail from './QuestionDetail';

function Question() {
   return (
      <>
         <QuestionDetail {...FakeData.Posts.singleQuestion} />
         <div className="mt-10">
            <p className="font-bold text-xl mb-6">Trả lời</p>
            <CommentRoot />
            <CommentContainer answer={true} {...FakeData.Posts.singlePost} />
         </div>
      </>
   );
}

export default Question;
