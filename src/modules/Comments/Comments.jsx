import Comment from './components/Comment/Comment';

import cls from './Comments.module.css'
import userPhoto1 from '../../assets/images/userPhoto1.png';
import userPhoto2 from '../../assets/images/userPhoto2.png';
import userPhoto3 from '../../assets/images/userPhoto3.png';
import userPhoto4 from '../../assets/images/userPhoto4.png';

const Comments = () => {
	return (
		<div className={cls.comments}>
			<Comment
				userPhoto={userPhoto1}
				comment='Amazing Telegram bot! Provides real-time crypto prices and news'
				profileName='@lorenzoo'
				userName='Lorenzo'
			/>
			<Comment
				userPhoto={userPhoto2}
				userName='Adalina'
				profileName='@ada'
				comment='Must-have bot for crypto traders. Accurate signals and analysis'
			/>
			<Comment
				userPhoto={userPhoto3}
				userName='Alexander'
				profileName='@alex_x'
				comment='Superb cryptocurrency bot! Quick updates and reliable data'
			/>
			<Comment
				userPhoto={userPhoto4}
				userName='Rushana'
				profileName='@Hana'
				comment='Efficient and user-friendly bot. Simplifies crypto trading tasks'
			/>
		</div>
	);
};

export default Comments;
