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
			blurred: true,
			likes: getRandomInt(110, 5400),
			image: 'http://lorempixel.com/400/400/',
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
				nickname: 'klonaps',
				comment: 'Типо весь такой занятой'
			},
			{
				nickname: 'norimyxxxo',
				comment: 'я помогаю маме, гуляю с собакой'
			},
			{
				nickname: 'fxlr8',
				comment: 'Антоха, не грусти'
			},
			{
				nickname: 'antonofficialprogamer',
				comment: 'че по кайфу то и делаю'
			}
		]
		return keks[Math.floor(Math.random() * keks.length)]
	}
	toggleLike = () => {
		this.setState({
			liked: !this.state.liked
		})
	}
	toggleBlur = () => {
		this.setState({
			blurred: !this.state.blurred
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
			comment,
			blurred,
			image
		} = this.state
		return (
			<div>
				<div className={styles.link}>
					<RIEInput
						value={image}
						change={this.updateNickname}
						propName='image'
					/>
				</div>
				<div className={styles.post} ref={(e) => { this.node = e }}>
					<header className={styles.header}>
						<div className={styles.avatar}>
							<div className={styles.image__wrapper}>
								<img className={cx(styles.image, { img_blurred: blurred })} src={image} alt='' />
							</div>
						</div>
						<div className={styles.text__wrap}>
							<span className={cx(styles.text_bold, { blurred })}>{nickname}</span>
						</div>
						<span className={cx(styles.icon, styles.icon_last)}>
							<span className={styles.icon_dots}></span>
						</span>
					</header>
					<div>
						<img onClick={this.toggleBlur} className={styles.photo} src={image} />
					</div>
					<div className={styles.post__info}>
						<section className={styles.icons}>
							<span className={styles.icon} onClick={this.toggleLike}>
								<span className={cx(styles.icon_like, { icon_liked: liked })}></span>
							</span>
							<span className={styles.icon}>
								<span className={styles.icon_msg}></span>
							</span>
							<span className={styles.icon}>
								<svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
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
							<span className={cx(styles.text_bold, { blurred })}>
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
