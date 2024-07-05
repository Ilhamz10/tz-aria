/* eslint-disable react/prop-types */
import Typography from '../../../../UI/Typography/Typography';

import cls from './Comment.module.css';

const Comment = ({ userPhoto, userName, profileName, comment }) => {
	return (
		<div className={cls.commentCont}>
			<div className={cls.commentHeader}>
				<img className={cls.userPhoto} src={userPhoto} alt='User photo' />
				<div className={cls.userInfo}>
					<Typography weight='semiBold' className={cls.userName}>
						{userName}
					</Typography>
					<Typography size='xs' weight='medium' className={cls.profileName}>
						{profileName}
					</Typography>
				</div>
			</div>
			<div className={cls.commentBody}>
				<Typography className={cls.comment}>{comment}</Typography>
			</div>
		</div>
	);
};

export default Comment;
