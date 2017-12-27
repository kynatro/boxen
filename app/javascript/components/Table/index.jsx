import classNames from 'classnames'

class Table extends Component {
  render() {
    const { bordered, caption, columns, headTheme, hover, responsive, rows, small, striped, theme } = this.props

    return (
      // <table className="table table-striped table-hover table-responsive-sm">
      <table className={classNames('table', {
        'table-light': theme && theme === 'light',
        'table-striped': striped,
        'table-hover': hover,
        'table-bordered': bordered,
        'table-sm': small,
        'table-responsive': responsive === true,
        [`table-responsive-${responsive}`]: typeof(responsive) === 'string'
      })}>
        {caption && <caption>{caption}</caption>}
        {columns && (
          <thead className={classNames({
            [`thead-${headTheme}`]: headTheme
          })}>
            <tr>
              {columns.map(column => (
                <th scope="col" key={column}>{column}</th>
              ))}
            </tr>
          </thead>
        )}

        {rows && (
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((column, ci) => (
                  <td key={`${ri}${ci}`}>{column}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    )
  }
}

Table.defaultProps = {
  columns: [],
  rows: [],
  striped: true,
  hover: true
}

Table.propTypes = {
  bordered: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.string),
  headTheme: PropTypes.oneOf(['dark', 'light']),
  hover: PropTypes.bool,
  responsive: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl']),
  rows: PropTypes.arrayOf(PropTypes.array),
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light'])
}

export default Table
