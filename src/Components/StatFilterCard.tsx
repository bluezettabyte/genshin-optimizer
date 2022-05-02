import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Info } from '@mui/icons-material';
import { Button, ButtonGroup, CardContent, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useContext } from 'react';
import { DataContext } from '../DataContext';
import { uiInput as input } from '../Formula';
import KeyMap, { StatKey } from '../KeyMap';
import { ElementKey } from '../Types/consts';
import BootstrapTooltip from './BootstrapTooltip';
import CardLight from './Card/CardLight';
import CustomNumberInput, { CustomNumberInputButtonGroupWrapper } from './CustomNumberInput';
import DropdownButton from './DropdownMenu/DropdownButton';
export default function StatFilterCard({ statFilters = {}, setStatFilters, disabled = false }:
  { statFilters: Dict<StatKey, number>, setStatFilters: (object: Dict<StatKey, number>) => void, disabled?: boolean }) {
  const { data } = useContext(DataContext)
  const statKeys: StatKey[] = ["atk", "hp", "def", "eleMas", "critRate_", "critDMG_", "heal_", "enerRech_"]
  if (data.get(input.weaponType).value !== "catalyst") statKeys.push("physical_dmg_")
  const charEle = data.get(input.charEle).value as ElementKey
  statKeys.push(`${charEle}_dmg_`)

  const remainingKeys = statKeys.filter(key => !(Object.keys(statFilters) as any).some(k => k === key))
  const setFilter = useCallback((sKey, min) => setStatFilters({ ...statFilters, [sKey]: min }), [statFilters, setStatFilters],)
  return <Box>
    <CardLight>
      <CardContent sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}>
        <Typography>Build Constraints</Typography>
        <BootstrapTooltip placement="top" title={<Typography>Constraint the generated builds to conform to some requirements, e.g. Generate builds with at least 140% Energy Recharge.</Typography>}>
          <Info />
        </BootstrapTooltip>
      </CardContent>
    </CardLight>
    <Box display="flex" flexDirection="column" gap={0.5}>
      <StatFilterItem value={undefined} close={undefined} statKeys={remainingKeys} setFilter={setFilter} disabled={disabled} />
      {Object.entries(statFilters).map(([statKey, min]) => {
        return <StatFilterItem key={statKey} statKey={statKey} statKeys={remainingKeys} setFilter={setFilter} disabled={disabled} value={min} close={() => {
          delete statFilters[statKey]
          setStatFilters({ ...statFilters })
        }} />
      })}
    </Box>
  </Box>
}

export function StatFilterItem({ statKey, statKeys = [], value = 0, close, setFilter, disabled = false }: {
  statKey?: string, statKeys: string[], value?: number, close?: () => void, setFilter: (statKey: string, value?: number) => void, disabled?: boolean
}) {
  const isFloat = KeyMap.unit(statKey) === "%"
  const onChange = useCallback(s => statKey && setFilter(statKey, s), [setFilter, statKey])
  return <ButtonGroup sx={{ width: "100%" }}>
    <DropdownButton
      title={statKey ? KeyMap.get(statKey) : "New Stat"}
      disabled={disabled}
    >
      {statKeys.map(sKey => <MenuItem key={sKey} onClick={() => { close?.(); setFilter(sKey, value) }}>{KeyMap.get(sKey)}</MenuItem>)}
    </DropdownButton>
    <CustomNumberInputButtonGroupWrapper sx={{ flexBasis: 30, flexGrow: 1 }}>
      <CustomNumberInput
        disabled={!statKey}
        float={isFloat}
        value={value}
        placeholder="Min Value"
        onChange={onChange}
        sx={{ px: 2 }}
      />
    </CustomNumberInputButtonGroupWrapper>
    {!!close && <Button color="error" onClick={close} disabled={disabled}><FontAwesomeIcon icon={faTrashAlt} /></Button>}
  </ButtonGroup>
}
