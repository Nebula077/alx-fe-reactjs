import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Generic function to fetch data from GitHub API
 * @param {string} url - The API endpoint URL
 * @param {object} config - Additional axios config
 * @returns {Promise} - Axios response promise
 */
function fetchUserData(url, config = {}) {
  return axios.get(`${GITHUB_API_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
    ...config,
  });
}

/**
 * Build advanced search query for GitHub users
 * @param {object} searchParams - Search parameters
 * @param {string} searchParams.username - Username to search for
 * @param {string} searchParams.location - Location filter
 * @param {string} searchParams.language - Programming language filter
 * @param {number} searchParams.minRepos - Minimum repository count
 * @param {number} searchParams.maxRepos - Maximum repository count
 * @param {number} searchParams.minFollowers - Minimum follower count
 * @param {number} searchParams.maxFollowers - Maximum follower count
 * @param {string} searchParams.sort - Sort field (followers, repositories, joined)
 * @param {string} searchParams.order - Sort order (asc, desc)
 * @returns {string} - Constructed search query
 */
function buildSearchQuery(searchParams) {
  const {
    username = '',
    location = '',
    language = '',
    minRepos,
    maxRepos,
    minFollowers,
    maxFollowers,
    sort = 'followers',
    order = 'desc'
  } = searchParams;

  let queryParts = [];

  // Add username if provided
  if (username.trim()) {
    queryParts.push(username.trim());
  }

  // Add location filter
  if (location.trim()) {
    queryParts.push(`location:${location.trim()}`);
  }

  // Add language filter
  if (language.trim()) {
    queryParts.push(`language:${language.trim()}`);
  }

  // Add repository count filters
  if (minRepos !== undefined && minRepos > 0) {
    queryParts.push(`repos:>=${minRepos}`);
  }
  if (maxRepos !== undefined && maxRepos > 0) {
    queryParts.push(`repos:<=${maxRepos}`);
  }

  // Add follower count filters
  if (minFollowers !== undefined && minFollowers > 0) {
    queryParts.push(`followers:>=${minFollowers}`);
  }
  if (maxFollowers !== undefined && maxFollowers > 0) {
    queryParts.push(`followers:<=${maxFollowers}`);
  }

  // Join all parts with spaces
  const query = queryParts.join(' ');

  return {
    q: query,
    sort,
    order,
    per_page: 20 // Limit results to 20 per page
  };
}

/**
 * Search users with advanced filters
 * @param {object} searchParams - Search parameters
 * @returns {Promise} - Search results
 */
function searchUsers(searchParams) {
  const params = buildSearchQuery(searchParams);
  return fetchUserData('/search/users', { params });
}

/**
 * Get user profile details
 * @param {string} username - GitHub username
 * @returns {Promise} - User profile data
 */
function getUserProfile(username) {
  return fetchUserData(`/users/${username}`);
}

/**
 * Get user's repositories
 * @param {string} username - GitHub username
 * @param {object} options - Additional options
 * @returns {Promise} - User's repositories
 */
function getUserRepos(username, options = {}) {
  const params = {
    sort: options.sort || 'updated',
    per_page: options.per_page || 10,
    ...options
  };
  return fetchUserData(`/users/${username}/repos`, { params });
}

/**
 * Get basic user list (for initial display)
 * @param {number} since - User ID to start from
 * @returns {Promise} - List of users
 */
function getUsers(since = 0) {
  return fetchUserData('/users', {
    params: { since, per_page: 20 }
  });
}

export default fetchUserData;
export {
  searchUsers,
  getUserProfile,
  getUserRepos,
  getUsers,
  buildSearchQuery
};