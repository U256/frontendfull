/* eslint-disable no-console */

'use client'

import { useEffect, useLayoutEffect } from 'react'

export const Nested = () => {
	console.log('Nested in')
	useEffect(() => {
		console.log('Nested effect')
		return () => {
			console.log('Nested effect out')
		}
	})

	useLayoutEffect(() => {
		console.log('Nested LayoutEffect')
		return () => {
			console.log('Nested LayoutEffect out')
		}
	})

	return (
		<div>
			test content
			<p>1</p>
		</div>
	)
}
