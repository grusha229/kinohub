import Image from 'next/image'
import styles from './page.module.css'
import { FilmSearch } from '@/components/Search/Search'
import Header from '@/components/Header/Header'
import FilmList from '@/components/Films/FilmList'

export default function Home() {
  return (
    <>
      <Header/>
      <FilmSearch/>
      <FilmList />
    </>
  )
}
