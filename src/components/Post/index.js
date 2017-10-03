import React, { PureComponent } from 'react'
import { RIEInput, RIENumber } from 'riek'
import classnames from 'classnames/bind'
import styles from './styles.sss'

const cx = classnames.bind(styles)

function getRandomInt(min, max) {
	return Math.floor(Math.random() * ((max - min) + 1)) + min
}

export default class Post extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			liked: false,
			likes: getRandomInt(110, 5400),
			...this.hydrate()
		}
	}
	hydrate() {
		const keks = [
			{
				nickname: 'ly4wii',
				comment: 'антоха - живет неплоха'
			},
			{
				nickname: 'inzam',
				comment: 'иди нахуй я сплю'
			},
			{
				nickname: 'sejriz',
				comment: 'пфф, это даже не алькантара'
			},
			{
				nickname: 'klonaps',
				comment: 'Типо весь такой занятой'
			},
			{
				nickname: 'norimyxxxo',
				comment: 'я помогаю маме, гуляю с собакой'
			},
			{
				nickname: 'fxlr8',
				comment: 'я тут закусок на всех взял, пригоняйте'
			},
			{
				nickname: 'antonofficialprogamer',
				comment: 'че покайфу то и делаю'
			}
		]
		return keks[Math.floor(Math.random() * keks.length)]
	}
	toggleLike = () => {
		this.setState({
			liked: !this.state.liked
		})
	}
	updateNickname = (diff) => {
		this.setState({
			...diff
		})
	}
	updateLikes = (diff) => {
		this.setState({
			likes: parseInt(diff.likes, 10)
		})
	}
	updateComment = (diff) => {
		this.setState({
			...diff
		})
	}
	render() {
		const {
			liked,
			nickname,
			likes,
			comment
		} = this.state
		return (
			<div>
				<div className={styles.post} ref={(e) => { this.node = e }}>
					<header className={styles.header}>
						<div className={styles.avatar}>
							<div className={styles.image__wrapper}>
								<img className={styles.image} src="https://scontent-arn2-1.cdninstagram.com/t51.2885-19/s150x150/14719826_327520444289362_5467047743476203520_a.jpg" alt='' />
							</div>
						</div>
						<div className={styles.text__wrap}>
							<span className={styles.text_bold}>{nickname}</span>
						</div>
						<span className={cx(styles.icon, styles.icon_last)}>
							<span className={styles.icon_dots}></span>
						</span>
					</header>
					<div>
						<img className={styles.photo} src="http://loremflickr.com/cache/images/ffefdddf9c367bc9bdf3fee1a40122ca.65.jpg"/>
					</div>
					<div className={styles.post__info}>
						<section className={styles.icons}>
							<span className={styles.icon} onClick={this.toggleLike}>
								<span className={cx(styles.icon_like, { icon_liked: liked })}></span>
							</span>
							<span className={styles.icon}>
								<span className={styles.icon_msg}></span>
							</span>
							<span className={cx(styles.icon, styles.icon_last)}>
								<span className={styles.icon_fav}></span>
							</span>
						</section>
						<div className={styles.info__line}>
							<span className={styles.text_bold}>Нравится: </span>
							<span className={styles.text_bold}>
								<RIENumber
									value={likes}
									change={this.updateComment}
									propName='likes'
									format={v => parseInt(v, 10).toLocaleString('ru-RU')}
								/>
							</span>
						</div>
						<div className={styles.info__line}>
							<span className={styles.text_bold}>
								<RIEInput
									value={nickname}
									change={this.updateNickname}
									propName='nickname'
								/>
								<span> </span>
							</span>
							<span className={styles.text}>
								<RIEInput
									value={comment}
									change={this.updateComment}
									propName='comment'
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
