import { useState } from "react";
import { getMomentFrom } from "utils/date.js";
import { findUser, findSpace } from "utils/find";
import { FaCrown, FaRegCommentAlt } from "react-icons/fa";
import { TbClock } from "react-icons/tb";
import { RiRocket2Line } from "react-icons/ri";
import "./thread.css";
import ThreadText from "./ThreadText";
import shortenNumber from "utils/number";

export default function Thread(props) {
	const moment = getMomentFrom(new Date(props.postDate));
	const space = findSpace(props.spaceID);
	const user = findUser(props.userID);
	const views = shortenNumber(props.views);
	const pictures = props.pictures.map((url) => (
		<img
			key={url}
			className="thread__content__pictures__image"
			src={url}
			alt="something for content"
		/>
	));
	const upvotes = shortenNumber(props.upvote);
	const downvotes = shortenNumber(props.downvote);
	const comments = shortenNumber(props.comments);

	function handleUpvote() {}

	function handleDownvote() {}

	function handleComment() {}

	return (
		<div className="thread__container">
			<div className="thread__container__top">
				<div className="thread__profile__container">
					<img
						src={user.profilePicture}
						alt="something for user profile"
					/>
					<div className="thread__profile">
						<p className="thread__profile__spacename">
							{space.name}
						</p>
						<div className="thread__profile__username__container">
							<FaCrown className="thread__profile__subscription" />
							<p className="thread__profile__username">
								{user.name}
							</p>
						</div>
					</div>
				</div>

				<div className="thread__info">
					<div className="thread__info__date__container">
						<TbClock className="thread__info__date__icon" />
						<div className="thread__info__date">
							Posted {moment}
						</div>
					</div>
					<div className="thread__info__views">{views} views</div>
				</div>
			</div>

			<div className="thread__content">
				<div className="thread__content__title__container">
					<div className="border"></div>
					<h2 className="thread__content__title">{props.title}</h2>
				</div>
				<div>
					<ThreadText text={props.text} />
				</div>
				<div className="thread__content__pictures">{pictures}</div>
			</div>

			<div className="thread__buttons">
				<button
					className="thread__buttons__upvote"
					onClick={handleUpvote}
				>
					<RiRocket2Line className="thread__buttons__upvote__icon" />
					{upvotes}
				</button>
				<button
					className="thread__buttons__downvote"
					onClick={handleDownvote}
				>
					<RiRocket2Line className="thread__buttons__downvote__icon" />
					{downvotes}
				</button>
				<button
					className="thread__buttons__comment"
					onClick={handleComment}
				>
					<FaRegCommentAlt className="thread__buttons__comment__icon" />
					{comments}
				</button>
			</div>
		</div>
	);
}
