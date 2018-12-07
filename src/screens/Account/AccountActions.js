/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Trans } from "react-i18next";
import { withNavigation } from "react-navigation";
import { createStructuredSelector } from "reselect";
import connect from "react-redux/es/connect/connect";
import Button from "../../components/Button";
import IconSend from "../../icons/Send";
import IconReceive from "../../icons/Receive";
import { readOnlyModeEnabledSelector } from "../../reducers/settings";

type Props = {
  accountId: string,
  navigation: *,
  readOnlyModeEnabled: boolean,
};
const mapStateToProps = createStructuredSelector({
  readOnlyModeEnabled: readOnlyModeEnabledSelector,
});
class AccountActions extends PureComponent<Props> {
  render() {
    const { readOnlyModeEnabled, navigation, accountId } = this.props;

    return (
      <View style={styles.root}>
        {!readOnlyModeEnabled && (
          <Button
            event="AccountSend"
            type="primary"
            IconLeft={IconSend}
            onPress={() =>
              navigation.navigate("SendSelectRecipient", { accountId })
            }
            title={<Trans i18nKey="account.send" />}
            containerStyle={styles.btn1}
          />
        )}
        <Button
          event="AccountReceive"
          type="primary"
          IconLeft={IconReceive}
          onPress={() =>
            navigation.navigate("ReceiveConnectDevice", { accountId })
          }
          title={<Trans i18nKey="account.receive" />}
          containerStyle={styles.btn2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btn1: {
    flex: 1,
    marginRight: 8,
  },
  btn2: {
    marginLeft: 8,
    flex: 1,
  },
});

export default withNavigation(connect(mapStateToProps)(AccountActions));
