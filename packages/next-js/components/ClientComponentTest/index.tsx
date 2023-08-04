/* eslint-disable no-console */

'use client'

import { useEffect, useLayoutEffect } from 'react'
import { Nested } from './Nested'

// Parent in
// Nested in
// Nested LayoutEffect
// Parent LayoutEffect
// Nested effect
// Parent effect
export const ClientComponentTest = () => {
	console.log('Parent in')
	useEffect(() => {
		console.log('Parent effect')
		return () => {
			console.log('Parent effect out')
		}
	})
	useLayoutEffect(() => {
		console.log('Parent LayoutEffect')
		return () => {
			console.log('Parent LayoutEffect out')
		}
	})

	return (
		<div>
			<Nested />
		</div>
	)
}
