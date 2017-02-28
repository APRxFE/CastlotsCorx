import 'rxjs/Rx'

import { NgModule } from '@angular/core'

import { CastlotsCorx } from './castlotsCorx'


@NgModule({
	providers: [
		CastlotsCorx
	]
})
export class CastlotsCorxModule {}

export { CastlotsCorx }