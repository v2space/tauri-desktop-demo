import Link from 'next/link'
// import styles from './menuLink.module.css'

interface MenuItem {
  path: string;
  icon: any;
  title: string;
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink = ({item}: MenuLinkProps) => {
  return (
    <Link href={item?.path} className="p-5 flex items-center gap-10 my-5 rounded-2xl">
      {item?.icon}
      {item?.title}
    </Link>
  )
}

export default MenuLink