import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import Spinner from "../Spinner";
import Error from "../Error";
import UsersList from "./UsersList";
import Paginate from "../Paginate";
import { configRandomUser } from "../../configs";
import ControlAmount from "./ControlAmount";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResult: configRandomUser.AMOUNT,
    };
  }
  load = () => {
    const { currentPage, currentResult } = this.state;
    this.setState({ isPending: true });
    getRandomUsers({ page: currentPage, results: currentResult })
      .then((data) => {
        console.log(data);
        if (data.error) {
          return this.setState({ error: data.error });
        }
        this.setState({ users: data.results, error: null });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, currentResult } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      currentResult !== prevState.currentResult
    ) {
      this.load();
    }
  }

  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };
  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));

  setResults = (value) => this.setState({ currentResult: value });
  render() {
    const { users, isPending, error, currentPage, currentResult } = this.state;
    if (error) {
      return <Error />;
    }
    if (isPending) {
      return <Spinner />;
    }
    return (
      <section>
        <h2>Users List</h2>

        {/* homework!!! */}
        {/* додати селект з вибором національності
        ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NZ', 'TR', 'US'] */}
        {/* додати чекбокс з вибором статі */}
        {/* homework!!! */}

        <ControlAmount
          amounts={configRandomUser.AMOUNTS}
          currentResult={currentResult}
          setResults={this.setResults}
        />
        <Paginate
          currentPage={currentPage}
          handlePrevBtn={this.handlePrevBtn}
          handleNextBtn={this.handleNextBtn}
        />
        <UsersList users={users} />
      </section>
    );
  }
}

export default UsersLoader;
