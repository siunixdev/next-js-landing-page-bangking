import styles from '../styles/Features.module.css'
import Card from './base/Card'
import { BriefcaseIcon, PaperAirplaneIcon, SignalSlashIcon, QueueListIcon, GiftIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const Features = () => {
  return (
    <div className={styles.features}>
      <h2>For Your Business</h2>
      <p>Weiciatis unde omnis iste natus error sit voluptatem accusantium<br />doloremque laudantium, totam rem aperiam, eaqu</p>
      <div className={styles.item}>
        <Card title={'Share your Insights'} description={'Unde omnis iste natus error sit volu ptatem accusantium dolor.'} icon={<BriefcaseIcon />} color={'#1F7CFF'} />
        <Card title={'Track your Leads'} description={'Unde omnis iste natus error sit volu ptatem accusantium dolor.'} icon={<PaperAirplaneIcon />} color={'#F75C4E'} />
        <Card title={'Go Offline Mode'} description={'Unde omnis iste natus error sit volu ptatem accusantium dolor.'} icon={<SignalSlashIcon />} color={'#191046'} />
        <Card title={'Know Kanban Mode'} description={'Unde omnis iste natus error sit volu ptatem accusantium dolor.'} icon={<QueueListIcon />} color={'#FF1FB3'} />
        <Card title={'Reward System Available'} description={'Unde omnis iste natus error sit volu ptatem accusantium dolor.'} icon={<GiftIcon />} color={'#5C4EF7'} />
        <Card title={'Over 120 Country'} description={'Unde omnis iste natus error sit volu ptatem accusantium dolor.'} icon={<GlobeAltIcon />} color={'#F7954E'} />
      </div>
    </div>
  )
}

export default Features