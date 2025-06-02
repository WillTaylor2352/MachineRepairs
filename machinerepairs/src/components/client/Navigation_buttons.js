'use client';
import Link from 'next/link';

export default function Nav_Buttons({ title, link }) {
	return <Link href={link}>{title}</Link>;
}
