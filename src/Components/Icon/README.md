# Icon

It's a subset of react-icons, so that you can just use Icon's and it's already got the best ones picked. Also, comes with a little styling via some variables etc.

## Example

```javascript
<Icon
  iconType='userlist'
  size={3.7}
  iconColor={'rgb(235, 235, 235)'}
  backgroundColor={'grey'}
  margin='auto'
  borderRadius='50%'
  padding={'2rem'}
/>
```

## StyledComponents Example

```javascript
<Icon
  iconType='user'
  size={12}
  iconColor={`rgb(${theme.colors.primary[2]})`}
  backgroundColor={`rgb(${theme.colors.neutral[4]})`}
  margin='auto'
  borderRadius='50%'
  padding='2rem'
/>
```

# Configs

### Icon Type

- **Required**
- **Type**: List
- **Default Value**: None

List of icon names, check proptypes

### Size

- **Type**: Number
- **Default Value**: 1

Number of REMs - has to be rems, for font size of icon

### iconColor

- **Type**: String
- **Default Value**: Black

Color for the icon itself, can be a css colour, hex, rgb, rgba anything that you'd normally stick in color

### backgroundColor

- **Type**: String

Color for the background, leaf off if you don't want one; can be a css colour, hex, rgb, rgba anything that you'd normally stick in color

### margin

- **Type**: String
- **Default Value**: 'auto'

A string which goes right into the css margin property. Leave it blank and it'll set to auto

### borderRadius

- **Type**: String

A string, so can be rem, px or % - do 50% for a circle

### padding

- **Type**: String
- **Default Value**: '0.25rem'

goes right into css, so put whatever you like, px, rem, ems etc.

```

```
