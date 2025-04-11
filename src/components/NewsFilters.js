import React from 'react';
import { Box, Tabs, Tab, Chip, Stack, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: '1px solid #e0e0e0',
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: '3px',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.9rem',
  minWidth: 'auto',
  padding: '12px 16px',
  color: theme.palette.text.primary,
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  borderRadius: '16px',
  fontWeight: 500,
  '&.MuiChip-outlined': {
    borderColor: '#e0e0e0',
  },
  '&.MuiChip-filled': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const NewsFilters = ({ 
  currentTab,
  onTabChange,
  selectedFilters,
  onFilterChange,
  categories,
  regions 
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterType, setFilterType] = React.useState(null);

  const handleFilterClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setFilterType(type);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setFilterType(null);
  };

  const handleFilterSelect = (value) => {
    onFilterChange(filterType, value);
    handleFilterClose();
  };

  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      {/* Main Navigation Tabs */}
      <StyledTabs
        value={currentTab}
        onChange={onTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="news categories"
      >
        <StyledTab label="Top Stories" value="top" />
        <StyledTab label="Live" value="live" />
        <StyledTab label="World" value="world" />
        <StyledTab label="Business" value="business" />
        <StyledTab label="Technology" value="technology" />
        <StyledTab label="Entertainment" value="entertainment" />
        <StyledTab label="Sports" value="sports" />
      </StyledTabs>

      {/* Filters Section */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ mt: 2, overflowX: 'auto', pb: 1 }}
      >
        <Button
          startIcon={<FilterListIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={(e) => handleFilterClick(e, 'category')}
          sx={{ textTransform: 'none' }}
        >
          Category
        </Button>

        <Button
          startIcon={<FilterListIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={(e) => handleFilterClick(e, 'region')}
          sx={{ textTransform: 'none' }}
        >
          Region
        </Button>

        {/* Active Filters */}
        {selectedFilters.map((filter) => (
          <FilterChip
            key={filter.value}
            label={filter.label}
            onDelete={() => onFilterChange(filter.type, filter.value)}
            variant="filled"
          />
        ))}
      </Stack>

      {/* Filter Menus */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFilterClose}
        PaperProps={{
          sx: {
            mt: 1,
            maxHeight: 300,
            width: 200,
          },
        }}
      >
        {filterType === 'category' &&
          categories.map((category) => (
            <MenuItem
              key={category.value}
              onClick={() => handleFilterSelect(category.value)}
              selected={selectedFilters.some(
                (f) => f.type === 'category' && f.value === category.value
              )}
            >
              {category.label}
            </MenuItem>
          ))}

        {filterType === 'region' &&
          regions.map((region) => (
            <MenuItem
              key={region.value}
              onClick={() => handleFilterSelect(region.value)}
              selected={selectedFilters.some(
                (f) => f.type === 'region' && f.value === region.value
              )}
            >
              {region.label}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default NewsFilters; 