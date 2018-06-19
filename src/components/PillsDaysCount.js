// @flow

import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import type { T } from 'types/common'
import Pills from 'components/base/Pills'
import { timeRangeDaysByKey } from 'reducers/settings'
import type { TimeRange } from 'reducers/settings'

type Props = {
  selected: string,
  onChange: ({ key: string, value: *, label: string }) => *,
  t: T,
}

class PillsDaysCount extends PureComponent<Props> {
  render() {
    const { selected, onChange, t } = this.props
    return (
      <Pills
        items={Object.keys(timeRangeDaysByKey).map((key: TimeRange) => ({
          key,
          value: timeRangeDaysByKey[key],
          label: t(`app:time.${key}`),
        }))}
        activeKey={selected}
        onChange={onChange}
      />
    )
  }
}

export default translate()(PillsDaysCount)
